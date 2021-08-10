import React, { useEffect, useState } from 'react';
import './index.less';
import { Button } from 'antd';
import ChForm, { FormItemType } from '../ChForm';
import { useForm } from 'antd/lib/form/Form';
import { useRef } from 'react';
const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const scaleNumber = [1, 2, 3, 4, 5, 6, 7];
let findNameInterval: number;
export default ({}: {}) => {
  const [form] = useForm();
  const [question, setQuestion] = useState<string>();
  const [findName, setfindName] = useState<number>(0);
  const [findName1, setfindName1] = useState<number>(1);
  const [findName2, setfindName2] = useState<number>(2);
  const [findName3, setfindName3] = useState<number>(3);

  const [fixedLine, setFixedLine] = useState<number>();
  const stage = [];
  const line = [1, 2, 3, 4, 5, 6];
  const grid = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ];

  const [beginFindName, setBeginFindName] = useState(false);
  const [beginFindNameTimer, setBeginFindNameTimer] = useState(10);
  const savedCallback = useRef<() => void>();

  function callback() {
    // 可以读取到最新的 state 和 props
    if (beginFindNameTimer === 0) {
      setBeginFindNameTimer(10);
      setfindName(Math.floor(Math.random() * 6));
      setfindName1(Math.floor(Math.random() * 6));
      setfindName2(Math.floor(Math.random() * 6));
      setfindName3(Math.floor(Math.random() * 6));
    } else {
      setBeginFindNameTimer(beginFindNameTimer - 1);
    }
  }

  // 每次渲染，更新ref为最新的回调
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (beginFindName) {
      findNameInterval = setInterval(() => {
        savedCallback.current!();
      }, 1000);
    } else {
      setBeginFindName(false);
      clearInterval(findNameInterval);
    }
    return () => clearInterval(findNameInterval);
  }, [beginFindName]);

  const buildQuestion = () => {
    form.validateFields().then(values => {
      let lineIndex = Math.floor(Math.random() * 6);
      if (values.fixedLine) {
        lineIndex = Number(values.fixedLine) - 1;
      }
      let gridIndex = Math.floor(Math.random() * 24);
      setQuestion(`请找到第${lineIndex + 1}弦，第${gridIndex + 1}品的音`);
    });
  };
  useEffect(() => {
    buildQuestion();
  }, []);

  return (
    <div>
      <ChForm
        form={form}
        formData={[
          {
            type: FormItemType.input,
            label: '第几弦',
            name: 'fixedLine',
          },
        ]}
      ></ChForm>
      <Button style={{ marginBottom: 30 }} onClick={() => buildQuestion()}>
        生成
      </Button>
      <div>{question}</div>
      <br />
      <hr />
      <br />
      <div>
        <div>
          找出把位内的音:{' '}
          <span style={{ fontSize: 25 }}>{scale[findName]}</span>
          <span style={{ fontSize: 25 }}>{scale[findName1]}</span>
          <span style={{ fontSize: 25 }}>{scale[findName2]}</span>
          <span style={{ fontSize: 25 }}>{scale[findName3]}</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;....{beginFindNameTimer}</span>
        </div>
        <div style={{ marginTop: 20 }}>
          <Button
            style={{ marginRight: 30 }}
            onClick={() => {
              setBeginFindName(!beginFindName);
            }}
          >
            {beginFindName ? '结束' : '开始'}
          </Button>
        </div>
      </div>
    </div>
  );
};
