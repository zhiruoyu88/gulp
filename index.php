<?php
	$a = array(2,3,4);
	print_r(array_pop($a));
	class a {
		function b (){
			print_r(array_pop(this=>$a));
			return self::c();
		}
		function c () {
			print_r(array_pop(this=>$a));
		}
	}
	a::b();
?>