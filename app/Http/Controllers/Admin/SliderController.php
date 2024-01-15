<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UnitRequest;
use App\Models\Admin\Slider;
use App\Repositories\Admin\SliderRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SliderController extends Controller
{
    protected $slider;
    public function __construct(SliderRepository $slider)
    {
        $this->slider = $slider;
    }

    public function index(){
        return Inertia::render('Module/Slider/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Slider::query();
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
    public function create(){

        return Inertia::render('Module/Slider/Add');
    }
    public function store(UnitRequest $request){
        $result = $this->slider->store($request);
        if($result['status']== true){
//            dd($result['message']);
            return to_route('admin.slider')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $result = $this->slider->edit($id);
        return Inertia::render('Module/Slider/Edit',[
            'result'=>$result
        ]);
    }
    public function update(Request $request){
        $result=$this->slider->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->slider->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->slider->status($id);
        return back()->with('success', $result['message']);
    }

    public function trashed(){
        return Inertia::render('Module/Slider/Trashed');
    }
    public function trashedData(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Slider::query();
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
        $record = Slider::onlyTrashed()->where('id',$id)->first();
        $record->forceDelete();
        return to_route('admin.slider')->with('success', 'Delete the slider');
    }
    public function permanentDeleteAll(){
        Slider::onlyTrashed()->forceDelete();
        return to_route('admin.slider')->with('success', 'Delete all slider');
    }
    public function undoTrashed($id){
        $record = Slider::onlyTrashed()->where('id',$id)->first();
        $record->restore();
        return to_route('admin.slider')->with('success', 'Restored the slider');
    }
    public function restoreAll(){
        Slider::onlyTrashed()->restore();
        return to_route('admin.slider')->with('success', 'Restored all slider');
    }
}
