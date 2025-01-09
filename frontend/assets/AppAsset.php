<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
    ];
    public $js = [
        "https://unpkg.com/react@18/umd/react.production.min.js",
    	"https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
    	"https://unpkg.com/@babel/standalone/babel.min.js",
    	"https://unpkg.com/axios/dist/axios.min.js",
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
