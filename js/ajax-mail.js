

	var form = $('#contact-form');

	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();
		var url=$(form).attr('action')

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: url,
			data: formData,
			success:function(res){
				res=JSON.parse(res);
				if(res.status==false){
					Swal.fire({
						icon: 'error',
						title: 'ُError',
						text: res.msg,
						
					})
				}else{
					Swal.fire({
						icon: 'success',
						title: 'ُSuccess',
						text: res.msg,
						
					})
				}
			}
		})
		
	});


