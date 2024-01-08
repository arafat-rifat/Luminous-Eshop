import{q as A,r as t,j as e,d as h,y as B}from"./app-191db840.js";import G from"./Mainlayout-96fcc9e6.js";import U from"./FlashMessage-ac40e3f4.js";import{u as J,M as O}from"./mantine-react-table.esm-3b13f2a5.js";import W from"./ParmanentDeleteModal-e1e8d3d3.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-bd80c064.js";import"./Header-31de6e9a.js";import"./Dropdown-abb0b648.js";import"./nonIterableRest-b3ebea8d.js";import"./Sidebar-ceed1b5b.js";import"./Table-d17bd9ef.js";import"./floating-ui.dom-3af90737.js";import"./emotion-react.browser.esm-3feb48e4.js";import"./transition-df9dcb4d.js";function V(){const{data:n,meta:u,flash:b,base_url:l}=A().props,[p,j]=t.useState(!1),[S,g]=t.useState(!n||n.length===0),[y,f]=t.useState(!1),[N,F]=t.useState(u?u.totalRowCount:0),[i,v]=t.useState([]),[c,D]=t.useState(""),[d,M]=t.useState([]),[a,P]=t.useState({pageIndex:0,pageSize:10}),[R,x]=t.useState(!1),[T,k]=t.useState(null),[m,I]=t.useState(n||[]);t.useEffect(()=>{(async()=>{m.length?f(!0):g(!0);const r=new URL("/admin/color/trashed/data",l);r.searchParams.set("start",`${a.pageIndex*a.pageSize}`),r.searchParams.set("size",`${a.pageSize}`),r.searchParams.set("filters",JSON.stringify(i)),r.searchParams.set("globalFilter",c??""),r.searchParams.set("sorting",JSON.stringify(d??[]));try{const o=await fetch(r.href);if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const w=o.headers.get("content-type");if(w&&w.includes("application/json")){const C=await o.json();I(C.data),F(C.meta.totalRowCount)}else throw new Error("Response is not JSON")}catch(o){j(!0),console.error(o)}finally{g(!1),f(!1)}})()},[i,c,a.pageIndex,a.pageSize,d]);function L(s){B.get("/admin/color/undo-trashed/"+s)}function E(s){k(s),x(!0)}const $=t.useMemo(()=>[{accessorKey:"name",header:" Color Name"},{header:"Actions",Cell:({row:s})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>L(s.id),className:"btn btn-sm btn-outline-primary",children:"Undo"}),e.jsx("button",{onClick:()=>E(s.id),className:"btn btn-sm btn-outline-danger",children:"Delete"})]})}],[]),z=J({columns:$,data:m,paginationDisplayMode:"pages",enableRowSelection:!0,enableDensityToggle:!1,getRowId:s=>s.id,initialState:{showColumnFilters:!1,showGlobalFilter:!0,density:"compact"},positionGlobalFilter:"left",mantineSearchTextInputProps:{placeholder:`Search ${m.length} rows`,sx:{minWidth:"300px"},variant:"filled"},manualFiltering:!0,manualPagination:!0,manualSorting:!0,rowCount:N,onColumnFiltersChange:v,onGlobalFilterChange:D,onPaginationChange:P,onSortingChange:M,state:{columnFilters:i,globalFilter:c,isLoading:S,pagination:a,showAlertBanner:p,showProgressBars:y,sorting:d},mantineToolbarAlertBannerProps:p?{color:"red",children:"Error loading data"}:void 0});return e.jsxs(e.Fragment,{children:[e.jsx(U,{flash:b}),e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(h,{href:"#",className:"text-[#FF6243] hover:underline text-base",children:"Color"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",children:e.jsx("span",{children:"List"})})]}),e.jsxs("div",{className:"ml-auto flex justify-center items-center gap-3",children:[e.jsx(h,{href:`${l}/admin/color/restore-all`,method:"get",className:"flex items-center px-7 py-2 bg-indigo-700 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",children:"Undo All"}),e.jsx(h,{href:`${l}/admin/color/permanent-delete-all`,method:"get",className:"flex items-center px-7 py-2 bg-red-600 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",children:"Delete All"})]})]}),e.jsx("br",{}),e.jsx(O,{table:z}),e.jsx(W,{isDeleteNoteModal:R,setIsDeleteNoteModal:x,fileToDelete:T,name:"Color",route:"color/permanent-delete"})]})}V.layout=n=>e.jsx(G,{children:n,title:"Color Trashed List || Luminous-Ecommerce"});export{V as default};
