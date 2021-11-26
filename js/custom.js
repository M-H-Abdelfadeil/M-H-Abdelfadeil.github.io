$.ajax({
	url:"projects.json",
	success:function(data){
		$.each(data,function(key,value){
		var links=getLinks(value.links);
		var detailsDashboard =getDetails(value.dashboard,'Dashboard');
		var detailsSite      =getDetails(value.site,'Frontend');
		var btnPlusData=` <a class="m-1 btn-view-details" id_project="${key}"+ href=""><i class="fas fa-plus-circle icon_${key}"></i></a>`;
		if(detailsDashboard=='' && detailsSite==''){
			btnPlusData='';  
		}
			$('#containerProjects').append(`
				<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
					<div class="flex-grow-1">
						<h3 class="mb-0">${value.title}</h3>
							
						<div class="subheading mb-3 mt-4">
						${links}
						${btnPlusData}
						</div>
						<div>${value.description}</div>
						<div class="d-none box-details-projects" id="boxDetails_${key}">
							${detailsDashboard}
							${detailsSite}
						</div>
						
					</div>
					<div class="flex-shrink-0"><span class="text-primary">${value.tools}</span></div>
				</div>
				`)
		})
		
	
	}
})





function getLinks(links){
	var github='';
	var youtube='';
	var site='';  
	if(links.github!=null){
		github = `<a class="m-1" href="${links.github}" target="_blank"><i class="fab fa-github"></i></a>`
	}
	if(links.youtube!=null){
		youtube = `<a class="m-1" href="${links.youtube}" target="_blank"><i class="fab fa-youtube"></i></a>`
	}
	if(links.site!=null){
		site = `<a class="m-1" href="${links.site}" target="_blank"><i class="fas fa-eye"></i></a>`
	}
	return github+youtube+site;
}


function getDetails(detials,name){
	var dataDetails='';
	
	if(detials!=null){
		dataDetails+=`<div class="font-weight-bold">- ${name}</div>`;
		$.each(detials,function(key,value){
			var childDataDetials='';
			$.each(value,function(childKey,childValue){
				childDataDetials+=`
					<li>${childValue}</li>
				`
			})
			dataDetails+=`
			<ul>
				<li>${key}</li>
				<ul>
					${childDataDetials}
				</ul>
			</ul>
			`
		})
	}
	return dataDetails;
}



$(function () {






	$('body').on('click','.btn-view-details',function(e){
		e.preventDefault()
		var id_project=$(this).attr('id_project');
		if ($("#boxDetails_"+id_project).hasClass('d-none')) {
			$('.icon_'+id_project).removeClass('fa-plus-circle')
			$('.icon_'+id_project).addClass('fa-minus-circle')
			$("#boxDetails_"+id_project).removeClass('d-none')
		}else{
			$("#boxDetails_"+id_project).addClass('d-none')
			$('.icon_'+id_project).removeClass('fa-minus-circle')
			$('.icon_'+id_project).addClass('fa-plus-circle')
		}
		//
	})
})





