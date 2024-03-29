<?php

use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Artisan;

if (!function_exists('fileUpload')) {

    function fileUpload($file,$folder = null)
    {

        $getContent = file_get_contents($file);

        // Check if the content is empty or if the file doesn't exist
        if ($getContent === false) {
            return ['status' => false, 'message' => 'File not found or unable to read content'];
        }
        $fileInfo = pathinfo($file);
        $extension = $file->extension();
        $folderName = $folder;
        $image = $getContent;
        $fileName = time() . '.' . $extension;
        // Create directory if it doesn't exist
        if (!Storage::disk('public')->exists($folderName)) {
            Storage::disk('public')->makeDirectory($folderName, 0775, true);
        }
        $realPath = 'public/' . $folderName;
        Storage::put($realPath . '/' . $fileName, $image);
        $path = $fileName;
        return $path;
    }
}


if (!function_exists('checkPermissions')) {
    function checkPermissions()
    {
        if(Auth::check()){
            // Users Permissions Start
            $permissions = Admin::with('permission')->where('id',Auth::id())->get();
            foreach ($permissions->first()->permission as $item) {
                $permissionIds[] = $item->pivot->permission_id;
            }
            $permissionNamesCollection = DB::table('permissions')
            ->whereIn('id', $permissionIds)
            ->pluck('permission_name');
            $permissionNames = $permissionNamesCollection->toArray();

            return $permissionNames;
        }

    }
}

if (!function_exists('clearCache')){
    function clearCache()
    {
        Artisan::call('cache:clear');
        Artisan::call('config:clear');
        Artisan::call('route:clear');
        Artisan::call('view:clear');

        return 'Cache cleared';
    }
}

if (! function_exists('humanFilesize')) {
    function humanFilesize($size, $precision = 2)
    {
        $units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        $step = 1024;
        $i = 0;

        while (($size / $step) > 0.9) {
            $size = $size / $step;
            $i++;
        }

        return round($size, $precision).$units[$i];
    }
}


function removeFile($path)
{
    return file_exists($path) && is_file($path) ? @unlink($path) : false;
}
