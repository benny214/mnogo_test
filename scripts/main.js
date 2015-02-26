	$(function(){

		var field = new Array("name", "e-mail","about");//поля обязательные 
				
		$("form").submit(function() {// обрабатываем отправку формы	
			var error=0; // индекс ошибки
			$("form").find(":input").each(function() {// проверяем каждое поле в форме
				for(var i=0;i<field.length;i++){ // если поле присутствует в списке обязательных
					if($(this).attr("name")==field[i]){ //проверяем поле формы на пустоту
						
						if(!$(this).val()){// если в поле пустое
							$(this).css('border', '2px solid #E74C3C');// устанавливаем рамку красного цвета
							error=1;// определяем индекс ошибки		
														
						}
						else{
							$(this).css('border', '2px solid #6C7A89');// устанавливаем рамку обычного цвета
						}
						
					}						
				}				
		   })
		   
		   //провека email адреса 
			var email = $("#email").val();
		   	if(!isValidEmailAddress(email)){
				error=2;
				$("#email").css('border', '2px solid #E74C3C');// устанавливаем рамку красного цвета
			}
			
			if(error==0){ // если ошибок нет то отправляем данные
				return true;
			}
			else{
			var err_text = "";
			if(error==1)  err_text="Не все обязательные поля заполнены!";
			if(error==2)  err_text="Введен не корректный e-mail!";
			// if(error==3)  err_text="Пароли не совпадают";
			
			$("#messenger").html(err_text);	
			$("#messenger").fadeIn("slow");	
			return false; //если в форме встретились ошибки , не  позволяем отослать данные на сервер.
			}
			
		
			
			
				
		})
	});

	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
    }