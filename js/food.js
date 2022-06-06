
    count = 0;
    

    
    $(".cart-btn").on("click",function(){
        count++;
        var img = $(this).parent().find(".dish-img").attr('src');
        var name = $(this).parent().find(".name").text();
        var price = $(this).parent().find(".price").text();

        var newhtml = `<div class="main-content">
                <div class="imageBox">
                    <img src="${img}" class="p-img" alt="">
                    <p class="i-name">${name}</p>
                    <p class="i-price">${price}</p>
                    <input type="number" onchange="num_change()" class="i-number" value="1">
                    <p class="ans"></p>
                    <button class="btn btn-danger dlt-btn">Delete</button>
                </div>
            </div>`
        $(".main-product-box").append(newhtml);
        num_change();
        item_count();
        dlt_record();
        total_price();

    })
    function item_count(){
        var res = $(".main-product-box").children().length;
        $(".badge-num").text(res);
    }

    // $(".cart-icon-btn").on("click",function(){
    //     $(".cart-icon-btn").addClass("cart-show")
    // })


    function num_change(){

        
        $(".i-number").on('keyup mouseup', function () {
            
            var input_price = $(this).parent().find(".i-price").text();
            st = input_price.slice(1)
            st = parseInt(st);
            console.log(st);
            var input_number = $(this).parent().find(".i-number").val();
            var  m;
            m = input_number * st;
            $(this).parent().find(".ans").text(m);
      }).trigger('mouseup');
      total_price();
    }


    function dlt_record(){
        $(".dlt-btn").on("click",function(){
            var dt = $(this).parent().remove();
        })
    }

    $(".checkout-btn").on("click",function(){
        var total = $(".imageBox .ans").text();
        total = parseInt(total);
        total = [total];
        $(".total-price").text(total);
    })

    function total_price(){
    
    }

