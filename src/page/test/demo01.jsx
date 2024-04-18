import React from 'react';
import nj from 'nornj';



// 编写模板字符串：创建一个包含 NornJ 模板语法的字符串，该字符串将成为您要编译的模板。

// 调用 compile 函数：使用 nj.compile 方法来编译模板字符串。此方法接受一个模板字符串作为参数，并返回一个编译后的模板函数。

// 使用编译后的模板函数：将返回的模板函数存储在变量中，并传递数据对象给该函数，以生成最终的 HTML 字符串。

// 定义模板字符串

const tmpl = `
<div id="test1">
  <div>使用 compile 解析htmlString</div><br/>

  <div>if 用法</div>
  <div>
    <if condition={show}>
      show
    </if>
  </div>

  <div>
    <if condition={!show}>
      !show
    </if>
  </div>
  <br/>

  <br/><div>each 用法</div>


  <div>
      <each of={list}>
        <div>@index:{@index} -- @item:{@item}<div/>
      </each>
  </div>

  </div>`;

// 编译模板字符串
const compiledTemplate = nj.compile(tmpl);


// 定义函数式组件
export const Demo01 = () => {
  // 定义数据对象
  const data = {
    list: ['apple', 'banana', 'orange'],
    show: true
  };

  // 使用编译后的模板函数生成 HTML 字符串
  const htmlString = compiledTemplate(data);


  // 返回 JSX，将 HTML 字符串渲染到组件中
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

// 将函数式组件渲染到页面
