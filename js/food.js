
    count = 0;
    
  




    // console.log("hello");
    $(".cart-btn").on("click",function(){

        console.log("hello");
        count++;
        var img = $(this).parent().find(".dish-img").attr('src');
        var name = $(this).parent().find(".name").text();
        var price = $(this).parent().find(".price").text();
        // var d_id = $(this).parent().attr(".dish-img").attr('data-id');
        // console.log(d_id);


        
        var newhtml = `<div class="main-content">
                <div class="imageBox">
                    <img src="${img}" class="p-img" alt="">
                    <p class="i-name">${name}</p>
                    <p class="i-price">${price}</p>
                    <input type="number" onchange="num_change()" min="1" class="i-number" value="1">
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

    $(".cart-icon-btn").on("click",function(){
        $(".cart-icon-btn").addClass("cart-show")
    })


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

//  function item_count(){
//         var res = $(".main-product-box").children().length;
//         $(".badge-num").text(res);
//     }
class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` 
             
        <div class="main-navbar">
        <nav class="navbar navbar-expand-lg navbar-light align-items-center">
            <a class="navbar-brand" href="food.html"><span>CUISINE</span>
                <!-- <img src="image/organic-food-restaurant-logo/4200784.jpg" class="logo img-fluid" alt=""> -->
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto ml-5">
                <li class="nav-item">
                  <a class="nav-link text-theme" href="food.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-theme" href="cuisine.html">Cuisine</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-theme" href="about-us.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-theme" href="contact-us.html">Contact Us</a>
                </li>
                
              </ul>
              <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> -->
            </div>
            <div class="collection">
                <div class="cart-main">
                    <button class="border-0 cart-icon-btn" type="button" data-toggle="modal" data-target="#exampleModal"><img src="image/trolley.png" class="cart-img" alt=""><span class="badge badge-num"></span></button>
                    <!-- <button class="border-0 cart-icon-close-btn"><img src="image/close.png" class="cart-img" alt=""> -->
                    <div class="swhite-box modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Your Cart</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button> 
                              </div>
                              <div class="modal-body justify-content-center">
                                <div class="container-fluid pt-3 justify-content-center">
                                    <div class="main-product-box">
                                    </div>
                                </div>
                                <!-- <button class="checkout-btn">Checkout</button> -->
                                <!-- <p>Checkout : <span class="total-price"></span></p> -->
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" onclick="item_count()" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        
                        
                    </div>
                </div>
            </div>
        </nav>
    </div>
    `
    }
}

customElements.define('my-header', MyHeader)



class MyFooter extends HTMLElement{
  connectedCallback(){
      this.innerHTML = `<footer class="footer py-5">
      <div class="container">
          <div class="row">
              <div class="col-lg-4">
                  <p class="h4 mb-0">Quick Links</p>
                  <ul class="footer-ul list-unstyled">
                      <li class="footer-li"><a class="footer-link" href="javascript:void(0)">Help</a></li>
                      <li class="footer-li"><a class="footer-link" href="javascript:void(0)">Privacy Policy</a></li>
                      <li class="footer-li"><a class="footer-link" href="javascript:void(0)">Copyright</a></li>
                  </ul>
              </div>
              <div class="col-lg-4">
                  <p class="h4 mb-0">Quick Links</p>
                  <ul class="footer-ul list-unstyled">
                      <li class="footer-li"><a class="footer-link" href="food.html">Home</a></li>
                      <li class="footer-li"><a class="footer-link" href="cuisine.html">Cuisine</a></li>
                      <li class="footer-li"><a class="footer-link" href="about-us.html">About Us</a></li>
                      <li class="footer-li"><a class="footer-link" href="contact-us.html">Contact Us</a></li>
                  </ul>
              </div>
              <div class="col-lg-4">
                  <p class="h4 mb-0">Contact Us</p>
                  <ul class="footer-ul list-unstyled">
                      <li><span>Ahmedabad, Gujarat</span></li>
                      <li class="footer-li"><a class="footer-link" href="javascript:void(0)">+91 99999 99999</a></li>
                      <li class="footer-li"><a class="footer-link" href="javascript:void(0)">info@gmail.com</a></li>
                  </ul>
              </div>
          </div>
      </div>
      </footer>`
  }
}

customElements.define('my-footer', MyFooter)


