<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Models\Admin\Product;
use App\Repositories\Admin\ProductRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    protected $product;
    public function __construct(ProductRepository $product)
    {
        $this->product = $product;
    }

    public function index(){
        return Inertia::render('Module/Product/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Product::query();
        if (!empty($filters)) {
            foreach ($filters as $filter) {
                $field = $filter['id']; // Change 'field' to 'id'
                $value = $filter['value'];
                $query->whereRaw('LOWER('.$field.') LIKE ?', ['%' . strtolower($value) . '%']);
            }
        }
        if (!empty($globalFilter)) {
            $query->where(function ($q) use ($globalFilter) {
                $q->where('name', 'LIKE', '%' . $globalFilter . '%');
            });
        }
        if (!empty($sorting)) {
            foreach ($sorting as $sort) {
                $id = $sort['id'];
                $direction = $sort['desc'] ? 'desc' : 'asc';
                $query->orderBy($id, $direction);
            }
        }
        $totalRowCount = $query->count();
        $data = $query
            ->skip($start)
            ->take($size)
            ->get();
        return response()->json([
            'data' => $data,
            'meta' => [
                'totalRowCount' => $totalRowCount,
            ],
        ]);
    }
    public function create($type){
        if($type == "physical" || $type == "digital" || $type == "license"){
            if($type == "physical"){
                return Inertia::render('Module/Product/Physical');
            }elseif($type == "digital"){
                return Inertia::render('Module/Product/Digital');
            }else{
                return Inertia::render('Module/Product/License');
            }
        }else{
            return back()->with("error","Invalid type");
        }

        return Inertia::render('Module/Product/Add');
    }
    public function store(ProductRequest $request){
        $result = $this->product->store($request);
        if($result['status']== true){
            return to_route('admin.color')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $result = $this->product->edit($id);
        return Inertia::render('Module/Product/Edit',[
            'result'=>$result
        ]);
    }
    public function update(Request $request){
        $result=$this->product->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->product->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->product->status($id);
        return back()->with('success', $result['message']);
    }

    public function trashed(){
        return Inertia::render('Module/Product/Trashed');
    }
    public function trashedData(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Product::query();
        if (!empty($filters)) {
            foreach ($filters as $filter) {
                $field = $filter['id']; // Change 'field' to 'id'
                $value = $filter['value'];
                $query->whereRaw('LOWER('.$field.') LIKE ?', ['%' . strtolower($value) . '%']);
            }
        }
        if (!empty($globalFilter)) {
            $query->where(function ($q) use ($globalFilter) {
                $q->where('name', 'LIKE', '%' . $globalFilter . '%');
            });
        }
        if (!empty($sorting)) {
            foreach ($sorting as $sort) {
                $id = $sort['id'];
                $direction = $sort['desc'] ? 'desc' : 'asc';
                $query->orderBy($id, $direction);
            }
        }
        $totalRowCount = $query->count();
        $data = $query
            ->skip($start)
            ->take($size)
            ->onlyTrashed()
            ->get();
        return response()->json([
            'data' => $data,
            'meta' => [
                'totalRowCount' => $totalRowCount,
            ],
        ]);
    }
    public function permanentDelete($id){
        $record = Product::onlyTrashed()->where('id',$id)->first();
        $record->forceDelete();
        return to_route('admin.product')->with('success', 'Delete the product');
    }
    public function permanentDeleteAll(){
        Product::onlyTrashed()->forceDelete();
        return to_route('admin.product')->with('success', 'Delete all product');
    }
    public function undoTrashed($id){
        $record = Product::onlyTrashed()->where('id',$id)->first();
        $record->restore();
        return to_route('admin.product')->with('success', 'Restored the product');
    }
    public function restoreAll(){
        Product::onlyTrashed()->restore();
        return to_route('admin.product')->with('success', 'Restored all product');
    }

    public function type(){
        return Inertia::render('Module/Product/Type');
    }
}