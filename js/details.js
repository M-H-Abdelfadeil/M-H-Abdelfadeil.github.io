$(function(){
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    if(id){
        $.ajax({
        url:"projects.json",
        success:function(res){
          var project=res[id];
          if (typeof project !== 'undefined'){
            $('#box-tools').html(project.tools)
           
            var htmlImages=``;
            for(var i=1;i<=project.countImg;i++){

                htmlImages+=`
                <a href="https://mahmoud.spacetravel-edu.com/projects-details/${project.folderImg}/${i}.jpg">
                    <img src="https://mahmoud.spacetravel-edu.com/projects-details/${project.folderImg}/${i}.jpg">
                </a>
                `
            }

           

            $('.pg-portfolio-images').html(htmlImages)

            $('.pg-portfolio-images').lightGallery({
                selector: 'a',
                thumbnail: true
            });
        
         
            $('.pg-portfolio-images').slick({
                dots: false,
                infinite: true,
                speed: 300,
                autoplay: false,
                arrows: true,
                prevArrow: '<span class="cr-slider-nav cr-slider-nav-left"><i class="icofont icofont-simple-left"></i></span>',
                nextArrow: '<span class="cr-slider-nav cr-slider-nav-right"><i class="icofont icofont-simple-right"></i></span>',
            });
            // Single Portfolio Gallery Slider Active
  
            

            var links=getLinks(project.links);
            $('#box-links').html(links)
           
            var detailsDashboard =getDetails(project.dashboard,'Dashboard');
            var detailsSite      =getDetails(project.site,'Frontend');
           if(detailsDashboard=='' && detailsSite==''){
            $('#box-details').html('notfound details');
           }else{
            $('#box-details').html(detailsDashboard+detailsSite);
           }
            
           
           
          }
          
        }


        
    })

    

    
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

    function getLinks(links){
        var github='';
        var youtube='';
        var site='';  
        if(links.github!=null){
            github = `<a class="social-icon" href="${links.github}" target="_blank"><i class="fab text-light fa-github  mx-4"></i></a>`
        }
        if(links.youtube!=null){
            youtube = `<a class="social-icon" href="${links.youtube}" target="_blank"><i class="fab text-light fa-youtube  mx-4"></i></a>`
        }
        if(links.site!=null){
            site = `<a class="social-icon" href="${links.site}" target="_blank"><i class="fas fa-eye  text-light mx-4"></i></a>`
        }
        return github+youtube+site;
    }

  
   
})

      




               
     