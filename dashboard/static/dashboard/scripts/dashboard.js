$(document).ready(function(){
    $(".toggle-bookmark").click(function(){
        var element = $(this);
        var articleId = element.data("id");
        var state = element.data("state");
        console.log("location - " + location);
        console.log("data-state value : " + state);
        if(state == "1"){
            console.log("Removing bookmark");
            $.ajax({
                type:"GET",
                url:"/unbookmark",
                data:{id:articleId},
                success: function(data) {
                    if(location == "profile"){
                        id = "#article-" + articleId;
                        $(id).remove();
                    }
                    else{
                        element.data("state", 0);
                        element.html("Bookmark");
                    }
                },
            });
        }
        else{
            console.log("Adding bookmark");
            $.ajax({
                type:"GET",
                url:"/bookmark",
                data: {id:articleId},
                success: function(data) {
                    element.data("state", 1);
                    element.html("Remove Bookmark");
                },
             });
        }

    });

    $(".toggle-like").click(function(){
        var element = $(this);
        var articleId = element.data("id");
        var state = element.data("state");
        console.log("data-state value : " + state);
        if(state == "1"){
            console.log("Removing Like");
            $.ajax({
                type:"GET",
                url:"/unlike",
                data:{id:articleId},
                success: function(data) {
                    element.data("state", 0);
                    element.html("Like");
                },
            });
        }
        else{
            console.log("Adding like");
            $.ajax({
                type:"GET",
                url:"/like",
                data: {id:articleId},
                success: function(data) {
                    element.data("state", 1);
                    element.html("Unlike");
                },
             });
        }
    });

    $(".delete-comment").click(function(){
        var element = $(this);
        var commentId = element.data("id");
        console.log("comment id deletion attempt " + commentId);
        $.ajax({
            type:"GET",
                url:"/delete_comment",
            data: {id:commentId},
            success: function(data){
                id = "#comment-" + commentId;
                $(id).remove();
            },
        });
    });
});