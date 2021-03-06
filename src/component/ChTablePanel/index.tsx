import React, { useEffect, useState, forwardRef } from 'react';
import { Table, Popconfirm, Button, Modal, Pagination } from 'antd';
import ChUtils from '../../chutils';
import ChForm from '../ChForm/index';
import './index.less';
import { useForm } from 'antd/lib/form/Form';
import { FormDataItem } from '../ChForm/index';
type ChResponse<T> = any;
// 表格Propsyar
interface TablePanelProps {
  columns: Column[];
  dataSource?: any[];
  url: string;
  urlDelete?: string;
  urlAdd?: string;
  urlUpdate?: string;
  formData: FormDataItem[];
  searchFormData?: FormDataItem[];
  expandable?: {
    expandedRowRender: (item: Item) => React.ReactElement;
  };
  onEditFormat?: (item: any) => void;
  onEditBefore?: (item: Item) => void | boolean;
  onReloadAfter?: (item: any) => void;
  query?: Object;
  actions?: [
    {
      loading?: boolean;
      type?:
        | 'text'
        | 'link'
        | 'ghost'
        | 'default'
        | 'primary'
        | 'dashed'
        | undefined;
      text: string;
      onClick: () => void;
    },
  ];
  disablePagination?: boolean;
}
// 表格Item
type Item = any;
// 表格Column
type Column = {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: string, ob: any) => JSX.Element;
  width?: number | string;
  fixed?: boolean;
};

const chTablePanel = forwardRef((props: TablePanelProps, ref: any) => {
  const {
    columns,
    dataSource,
    url,
    urlAdd,
    urlDelete,
    urlUpdate,
    formData,
    searchFormData,
    expandable,
    query,
    onEditBefore,
    onEditFormat,
    onReloadAfter,
    actions,
    disablePagination,
  } = props;
  const tablePage = ChUtils.chHooks.usePage({
    url: url,
    pageSize: 10,
    query: query || {},
    onReloadAfter,
  });
  const { list, reload, total, status, setQuery } = tablePage;
  const [form] = useForm();
  const [editor, setEditor] = useState<any>();
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (ref) {
      ref.current = {
        status,
        total,
        list,
        reload,
        form,
        editor,
        showEditModal,
      };
    }
  }, [list, reload]);

  const doDeleteItem = (id: string) => {
    ChUtils.Ajax.request({ url: urlDelete!, data: { id } }).then(
      (res: ChResponse<Item>) => {
        if (res && res.status == 0) {
          reload();
        }
      },
    );
  };
  const doAddItem = (item: Item) => {
    if (!onEditBefore) {
    } else {
      const hasError = onEditBefore(item);
      if (hasError) {
        return;
      }
    }
    ChUtils.Ajax.request({ url: urlAdd!, data: item }).then(
      (res: ChResponse<Item>) => {
        if (res && res.status == 0) {
          reload();
          setShowEditModal(false);
          setEditor(null);
        }
      },
    );
  };
  const doEditItem = (item: Item) => {
    item.id = editor.id;
    if (!onEditBefore) {
    } else {
      const hasError = onEditBefore(item);
      if (hasError) {
        return;
      }
    }
    ChUtils.Ajax.request({ url: urlUpdate!, data: item }).then(
      (res: ChResponse<Item>) => {
        if (res && res.status == 0) {
          reload();
          setShowEditModal(false);
          setEditor(null);
        }
      },
    );
  };

  const _columns = columns.concat([
    {
      title: '',
      dataIndex: 'option',
      key: 'option',
      render: (_, item: { id: string }) => {
        return (
          <div>
            {urlDelete && (
              <Popconfirm
                title="您确定删除此项?"
                onConfirm={() => {
                  doDeleteItem(item.id);
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button type="link">删除</Button>
              </Popconfirm>
            )}
            {urlUpdate && (
              <Button
                onClick={() => {
                  let data = JSON.parse(JSON.stringify(item));
                  setEditor(data);
                  onEditFormat && onEditFormat(data);
                  form.setFieldsValue(data);
                  setShowEditModal(true);
                  //   setShowGradeModal(true)
                }}
                type="link"
              >
                编辑
              </Button>
            )}
          </div>
        );
      },
    },
  ]);
  return (
    <div className="ch-tablePanel">
      {searchFormData && searchFormData.length > 0 && (
        <ChForm
          showclear={true}
          submitname="搜索"
          layout={{}}
          formData={searchFormData}
          onFinish={values => {
            let q = Object.assign(query || {}, values);
            ChUtils.chFormats.deleteObjectEmptyKey(q);
            setQuery(q);
          }}
        />
      )}
      {urlAdd && (
        <Button
          style={{
            marginBottom: '10px',
          }}
          onClick={() => {
            setEditor({});
            setShowEditModal(true);
          }}
          type="primary"
        >
          添加
        </Button>
      )}
      {actions &&
        actions.map((item, index) => {
          return (
            <Button
              loading={item.loading}
              key={'_' + index}
              style={{ marginLeft: 20 }}
              type={item.type}
              onClick={() => {
                item.onClick && item.onClick();
              }}
            >
              {item.text}
            </Button>
          );
        })}
      <Table
        loading={status == 'loading'}
        rowKey="id"
        dataSource={dataSource || list}
        columns={_columns}
        expandable={expandable}
        pagination={false}
      />
      {!disablePagination && (
        <div
          style={{
            marginTop: 20,
          }}
        >
          <Pagination
            defaultCurrent={1}
            total={total}
            pageSize={10}
            onChange={(page, pageSize) => {
              reload(page);
            }}
          />
        </div>
      )}
      <Modal
        title={editor && editor.id ? '编辑' : '新增'}
        destroyOnClose
        okText="确定"
        cancelText="取消"
        visible={showEditModal}
        onOk={() => {
          form.validateFields().then(values => {
            console.log('提交编辑', values);
            if (!editor.id) {
              doAddItem(values);
            } else {
              doEditItem(values);
            }
          });
        }}
        onCancel={() => setShowEditModal(false)}
      >
        <ChForm editor={editor} form={form} formData={formData} />
      </Modal>
    </div>
  );
});

export default chTablePanel;
