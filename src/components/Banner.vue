<template>
  <div class="container">
    <div class="carousel-caption relative">
      <div class="row d_flex">
        <div class="col-1">
          <div class="creative">
            <h1>Find <br />A Dog</h1>
            <p>
        Are you ready to experience the joy of dog adoption? At Pet Finder, we believe that every dog deserves a loving and forever home. Our mission is to connect compassionate individuals like you with adorable dogs in need, creating lifelong bonds filled with love and companionship.            </p>
            <button class="read_more">Contact us</button>
          </div>
        </div>
        <div class="col-2">
          <div class="row mar_right">
            <div class="sub">
              <div class="agency">
                <figure><img src="https://images.dog.ceo/breeds/spaniel-cocker/n02102318_10019.jpg" alt="#" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style>
.container {
    min-width: 992px ;
    margin-left: 6rem;
  }
  .carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}
.relative {
    position: inherit;
    left: 0;
    right: 0;
    text-align: center;
    position: inherit;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.d_flex {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.col-1, .sub, .col-2{
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.creative {
    text-align: left;
}

.creative h1 {
    font-size: 80px;
    line-height: 90px;
    color: #101010;
    font-weight: bold;
}

.creative p {
    color: #101010;
    padding: 30px 0 55px 0;
    line-height: 30px;
}

.creative .read_more {
    display: inline-block;
    margin-right: 5px;
}
 .col-1 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .sub {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-2 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .mar_right {
    margin-right: -90px;
}
.agency figure {
    margin: 0;
}

.agency figure img {
    filter: drop-shadow(4px 6px 5px #0d03034f);
    border-top-right-radius:  100px;
    border-bottom-left-radius:  100px;
    margin-left: 8rem;
}

.read_more {
    font-size: 16px;
    background: #363636;
    max-width: 204px;
    width: 100%;
    transition: ease-in all 0.5s;
    color: #fff;
    display: block;
    height: 61px;
    line-height: 61px;
    text-align: center;
    border-radius: 30px;
    border: #363636;
    text-transform: uppercase;
    font-weight: bold;
}

.read_more:hover {
    background: #fdc001;
    color: #fff;
}
@media (min-width: 992px) and (max-width: 1199px) {
    .mar_right {
        margin-right: 0;
    }
    .creative .read_more {
        max-width: 185px;
        margin-right: 0;
    }
    .container {
    max-width: 960px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
    .mar_right {
        margin-right: 0;
    }
    .avail-h1{
  text-align: center;
  margin: 3rem;
}
    .container {
    max-width: 720px;
    margin-left: 3rem;
  }
    .creative h1 {
        font-size: 56px;
        line-height: 70px;
    }
    .creative p {
        padding: 5px 0 15px 0;
    }
    .creative .read_more {
        max-width: 142px;
        margin-right: 0; 
        }
        }

@media (min-width: 576px) and (max-width: 767px) {
    .mar_right {
        margin-right: 0px;
    }
    .about_img,
    .agency {
        margin-top: 30px;
    }
    .agency {
        margin-top: 30px;
    }
    .container {
    max-width: 767px;
    margin-left: 2rem;
  }
 .row {
    flex-direction: column;
  }
  .col-1,
  .col-2 {
    max-width: 100%;
  }
.creative h1{
    font-size: 60px;
    line-height: 70px;
    color: #101010;
    font-weight: bold;
    }
.creative p{
      width: 680px;
    }
    .agency figure img {
    width: 650px;
    height: 420px;
    margin-left: 0;
   }
   .agency figure{
    margin: 0;
    text-align: left;
   }

  }

@media (max-width: 575px) {
  .container {
    max-width: 550px;
  }
  .cont{
    margin-left: 1rem;
  }
    .about_img,
    .agency {
        margin-top: 30px;
    }
    .creative .read_more {
        margin-bottom: 5px;
        margin-right: 0;
    }
    .creative h1{
    font-size: 50px;
    line-height: 60px;
    color: #101010;
    font-weight: bold;
    }
    .creative p{
      width: 340px;
    }
    .mar_right {
        margin-right: 0px;
    }
    
     .container {
    margin-left: 1rem;
  }
   .row {
    flex-direction: column;
  }
 
  .agency figure img {
    width: 340px;
    margin-left: 0;
   }
   .agency figure{
    margin: 0;
    text-align: left;
   }

  .col-1,
  .col-2 {
    max-width: 100%;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

</style>