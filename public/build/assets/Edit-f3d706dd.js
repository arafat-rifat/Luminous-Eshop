import{q as d,j as e,d as m,y as n}from"./app-191db840.js";import c from"./Mainlayout-96fcc9e6.js";import p from"./FlashMessage-ac40e3f4.js";import{u as h}from"./index.esm-3305e003.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-bd80c064.js";import"./Header-31de6e9a.js";import"./Dropdown-abb0b648.js";import"./nonIterableRest-b3ebea8d.js";import"./Sidebar-ceed1b5b.js";function x(){const{flash:r,result:s}=d().props,{register:t,handleSubmit:a,formState:{errors:i}}=h({defaultValues:{id:s.id,name:s.name}});function l(o){n.post("/admin/color/update",o)}return e.jsxs(e.Fragment,{children:[e.jsx(p,{flash:r}),e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(m,{href:"#",className:"text-primary hover:underline",children:"Color"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Add"})})]})]}),e.jsx("div",{className:"pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6",children:e.jsxs("div",{className:"panel",id:"forms_grid",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Color Edit Form"})}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:a(l),method:"post",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx("input",{type:"hidden",...t("id")}),e.jsxs("div",{children:[e.jsx("label",{children:"Name"}),e.jsx("input",{...t("name",{required:"Category Name Is required"}),type:"text",className:"form-input",placeholder:"Enter Category Name"}),i.name&&e.jsx("p",{className:"text-red-600 pt-2",children:i.name.message})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})})]})})]})}x.layout=r=>e.jsx(c,{children:r,title:"HR || Add Group Of Company"});export{x as default};
