var _jsxFileName="__tests__/basic/Form.android.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Form=require("./../../src/basic/Form");
var _Item=require("./../../src/basic/Item");
var _Label=require("./../../src/basic/Label");
var _Input=require("./../../src/basic/Input");
var _Icon=require("./../../src/basic/Icon");
var _Textarea=require("./../../src/basic/Textarea");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders Fixed Label Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:22}},
_react2.default.createElement(_Item.Item,{fixedLabel:true,__source:{fileName:_jsxFileName,lineNumber:23}},
_react2.default.createElement(_Label.Label,{__source:{fileName:_jsxFileName,lineNumber:24}},"Username"),
_react2.default.createElement(_Input.Input,{__source:{fileName:_jsxFileName,lineNumber:25}})),

_react2.default.createElement(_Item.Item,{fixedLabel:true,last:true,__source:{fileName:_jsxFileName,lineNumber:27}},
_react2.default.createElement(_Label.Label,{__source:{fileName:_jsxFileName,lineNumber:28}},"Password"),
_react2.default.createElement(_Input.Input,{secureTextEntry:true,__source:{fileName:_jsxFileName,lineNumber:29}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Inline Label Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:40}},
_react2.default.createElement(_Item.Item,{inlineLabel:true,__source:{fileName:_jsxFileName,lineNumber:41}},
_react2.default.createElement(_Label.Label,{__source:{fileName:_jsxFileName,lineNumber:42}},"Username"),
_react2.default.createElement(_Input.Input,{__source:{fileName:_jsxFileName,lineNumber:43}})),

_react2.default.createElement(_Item.Item,{inlineLabel:true,last:true,__source:{fileName:_jsxFileName,lineNumber:45}},
_react2.default.createElement(_Label.Label,{__source:{fileName:_jsxFileName,lineNumber:46}},"Password"),
_react2.default.createElement(_Input.Input,{secureTextEntry:true,__source:{fileName:_jsxFileName,lineNumber:47}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Floating Label Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:58}},
_react2.default.createElement(_Item.Item,{floatingLabel:true,__source:{fileName:_jsxFileName,lineNumber:59}},
_react2.default.createElement(_Label.Label,{__source:{fileName:_jsxFileName,lineNumber:60}},"Username"),
_react2.default.createElement(_Input.Input,{__source:{fileName:_jsxFileName,lineNumber:61}})),

_react2.default.createElement(_Item.Item,{floatingLabel:true,last:true,__source:{fileName:_jsxFileName,lineNumber:63}},
_react2.default.createElement(_Label.Label,{__source:{fileName:_jsxFileName,lineNumber:64}},"Password"),
_react2.default.createElement(_Input.Input,{secureTextEntry:true,__source:{fileName:_jsxFileName,lineNumber:65}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Placeholder Label Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:76}},
_react2.default.createElement(_Item.Item,{__source:{fileName:_jsxFileName,lineNumber:77}},
_react2.default.createElement(_Input.Input,{placeholder:"Username",__source:{fileName:_jsxFileName,lineNumber:78}})),

_react2.default.createElement(_Item.Item,{last:true,__source:{fileName:_jsxFileName,lineNumber:80}},
_react2.default.createElement(_Input.Input,{placeholder:"Password",secureTextEntry:true,__source:{fileName:_jsxFileName,lineNumber:81}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Stacked Label Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:92}},
_react2.default.createElement(_Item.Item,{stackedLabel:true,__source:{fileName:_jsxFileName,lineNumber:93}},
_react2.default.createElement(_Label.Label,{__source:{fileName:_jsxFileName,lineNumber:94}},"Username"),
_react2.default.createElement(_Input.Input,{__source:{fileName:_jsxFileName,lineNumber:95}})),

_react2.default.createElement(_Item.Item,{stackedLabel:true,last:true,__source:{fileName:_jsxFileName,lineNumber:97}},
_react2.default.createElement(_Label.Label,{__source:{fileName:_jsxFileName,lineNumber:98}},"Password"),
_react2.default.createElement(_Input.Input,{secureTextEntry:true,__source:{fileName:_jsxFileName,lineNumber:99}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Regular Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:110}},
_react2.default.createElement(_Item.Item,{regular:true,__source:{fileName:_jsxFileName,lineNumber:111}},
_react2.default.createElement(_Input.Input,{placeholder:"Regular Textbox",__source:{fileName:_jsxFileName,lineNumber:112}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Underline Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:123}},
_react2.default.createElement(_Item.Item,{__source:{fileName:_jsxFileName,lineNumber:124}},
_react2.default.createElement(_Input.Input,{placeholder:"Underline Textbox",__source:{fileName:_jsxFileName,lineNumber:125}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Rounded Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:136}},
_react2.default.createElement(_Item.Item,{rounded:true,__source:{fileName:_jsxFileName,lineNumber:137}},
_react2.default.createElement(_Input.Input,{placeholder:"Rounded Textbox",__source:{fileName:_jsxFileName,lineNumber:138}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Icon Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:149}},
_react2.default.createElement(_Item.Item,{__source:{fileName:_jsxFileName,lineNumber:150}},
_react2.default.createElement(_Icon.Icon,{active:true,name:"home",__source:{fileName:_jsxFileName,lineNumber:151}}),
_react2.default.createElement(_Input.Input,{placeholder:"Icon Textbox",__source:{fileName:_jsxFileName,lineNumber:152}})),

_react2.default.createElement(_Item.Item,{__source:{fileName:_jsxFileName,lineNumber:154}},
_react2.default.createElement(_Input.Input,{placeholder:"Icon Alignment in Textbox",__source:{fileName:_jsxFileName,lineNumber:155}}),
_react2.default.createElement(_Icon.Icon,{active:true,name:"swap",__source:{fileName:_jsxFileName,lineNumber:156}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Success Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:167}},
_react2.default.createElement(_Item.Item,{success:true,__source:{fileName:_jsxFileName,lineNumber:168}},
_react2.default.createElement(_Input.Input,{placeholder:"Textbox with Success Input",__source:{fileName:_jsxFileName,lineNumber:169}}),
_react2.default.createElement(_Icon.Icon,{name:"ios-checkmark-circle",__source:{fileName:_jsxFileName,lineNumber:170}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Error Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:181}},
_react2.default.createElement(_Item.Item,{error:true,__source:{fileName:_jsxFileName,lineNumber:182}},
_react2.default.createElement(_Input.Input,{placeholder:"Textbox with Error Input",__source:{fileName:_jsxFileName,lineNumber:183}}),
_react2.default.createElement(_Icon.Icon,{name:"ios-close-circle",__source:{fileName:_jsxFileName,lineNumber:184}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Disabled Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:195}},
_react2.default.createElement(_Item.Item,{disabled:true,__source:{fileName:_jsxFileName,lineNumber:196}},
_react2.default.createElement(_Input.Input,{disabled:true,placeholder:"Disabled Textbox",__source:{fileName:_jsxFileName,lineNumber:197}}),
_react2.default.createElement(_Icon.Icon,{name:"ios-information-circle",__source:{fileName:_jsxFileName,lineNumber:198}})))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Textarea Input",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Form.Form,{__source:{fileName:_jsxFileName,lineNumber:209}},
_react2.default.createElement(_Textarea.Textarea,{rowSpan:5,bordered:true,placeholder:"Textarea",__source:{fileName:_jsxFileName,lineNumber:210}}))).


toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Form.android.js.map