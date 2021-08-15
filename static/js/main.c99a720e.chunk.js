(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__29w4k"}},11:function(t,e,n){t.exports={item:"ContactList_item__2Ajxr"}},12:function(t,e,n){t.exports={filter:"Filter_filter__mhY4u"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),o=n.n(r),i=n(13),s=n(2),u=n(3),l=n(5),h=n(4),m=n(21),b=n(8),d=n.n(b),j=n(0),f=function(t){var e=t.children;return Object(j.jsx)("div",{className:d.a.container,children:e})},p=n(9),O=n(10),v=n.n(O),x=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.contactNameId=Object(m.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{htmlFor:this.contactNameId,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.contactNameId})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(11),g=n.n(C),S=function(t){var e=t.contacts,n=t.onDelete;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:g.a.item,name:a,children:[a,": ",c,Object(j.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},y=n(12),w=n.n(y),_=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:w.a.filter,children:["Find contact by name",Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})},k=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handlerFormSubmit=function(e){var n=e.name,a=e.number,c={id:Object(m.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(j.jsxs)(f,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(x,{onSubmit:this.handlerFormSubmit}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(_,{value:this.state.filter,onChange:this.changeFilter}),Object(j.jsx)(S,{contacts:e,onDelete:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={container:"Container_container__1wqme"}}},[[20,1,2]]]);
//# sourceMappingURL=main.c99a720e.chunk.js.map