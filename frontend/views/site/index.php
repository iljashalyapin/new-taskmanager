<?php

/* @var $this yii\web\View */

$this->title = 'Home';
?>
<style>
    input, select {
    	height: 25px;
    	width: 300px;
    }
    textarea {
    	height: 100px;
    	width: 300px;
    }
    button {
    	font-size: 20px;
    	font-weight: 700;
    	color: White;         
    }
    .btn_show {
        background-color: Gray;
    }
    .btn_add {
    	background-color: LimeGreen;
    }
    .btn_update {
        background-color: Blue;   	
    }
    .btn_delete {
        background-color: Red;
    }
    .btn_save {
    	background-color: SaddleBrown;
    }
    .table {
    	font-size: 15px;
    }
    .bordered {
    	margin: auto;
    	width: 600px;
    	border: 2px solid;
    }
</style>
<div class="site-index">
    
    <div class="jumbotron">
    	<p class="lead">Please, select the necessary action:</p>
    	<br>
    	<button class="btn_show" onclick="Show_tasks()">Show tasks</button>
    	&ensp;
    	<button class="btn_add" onclick="Add_task()">Add new task</button>
    	&ensp;
    	<button class="btn_update">Update task</button>
    	&ensp;
    	<button class="btn_delete">Delete task</button>
    </div>
   
</div>

<script type="text/jsx" src="js/react-components/ReactJS/listTasks.js" ></script>
<script type="text/jsx" src="js/react-components/ReactJS/addTask.js" ></script>


