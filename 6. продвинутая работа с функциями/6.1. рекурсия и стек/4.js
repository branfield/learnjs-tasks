function printList(list) {
	
	let tmp = list;
	let newList = {value : tmp.value, next : null};
	tmp = tmp.next;
	
	while(tmp) {

		 newList = {value : tmp.value, next : newList};
		 tmp = tmp.next;
		
	 };
	 
	
	 
	 while(newList){
		
		 alert(newList.value);
		 newList = newList.next;

	 };
}