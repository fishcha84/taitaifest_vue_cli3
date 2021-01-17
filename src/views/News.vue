<template>
  <div class="news">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <br />
          <h3 style="color: midnightblue">new released after movie</h3>
          <hr style="border: 3px solid hotpink; width: 100px" align="left" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/YD3zVKFTpIY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <br />
          <h3 style="color: midnightblue">latest news</h3>
          <hr style="border: 3px solid hotpink; width: 100px" align="left" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <NewsComponent />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <br />
          <h3 style="color: midnightblue">live gallery</h3>
          <hr style="border: 3px solid hotpink; width: 100px" align="left" />
        </div>
      </div>

      <div class="container text-center my-3">
        <div class="row mx-auto my-auto">
          <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
            <div class="carousel-inner w-100" role="listbox">
              <div class="carousel-item active">
                <div class="col-md-4">
                  <div class="card card-body">
                    <img
                      class="img-fluid"
                      src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-4">
                  <div class="card card-body">
                    <img
                      class="img-fluid"
                      src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-4">
                  <div class="card card-body">
                    <img
                      class="img-fluid"
                      src="https://images.unsplash.com/photo-1520095972714-909e91b038e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-4">
                  <div class="card card-body">
                    <img
                      class="img-fluid"
                      src="https://images.unsplash.com/photo-1533137098665-47ca60257cec?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-4">
                  <div class="card card-body">
                    <img
                      class="img-fluid"
                      src="https://images.unsplash.com/photo-1454908027598-28c44b1716c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    />
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
              <span
                class="carousel-control-prev-icon bg-dark border border-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
              <span
                class="carousel-control-next-icon bg-dark border border-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import NewsComponent from '@/components/NewsComponent.vue'

export default {
  name: 'News',
  components: {
    NewsComponent
  },

  mounted () {
    $('#recipeCarousel').carousel({
      interval: 10000
    })

    $('.carousel .carousel-item').each(function () {
      const minPerSlide = 3
      let next = $(this).next()
      if (!next.length) {
        next = $(this).siblings(':first')
      }
      next.children(':first-child').clone().appendTo($(this))

      for (let i = 0; i < minPerSlide; i++) {
        next = next.next()
        if (!next.length) {
          next = $(this).siblings(':first')
        }

        next.children(':first-child').clone().appendTo($(this))
      }
    })
  }
}
</script>

<style>
@media (max-width: 768px) {
  .carousel-inner .carousel-item > div {
    display: none;
  }
  .carousel-inner .carousel-item > div:first-child {
    display: block;
  }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

/* display 3 */
@media (min-width: 768px) {
  .carousel-inner .carousel-item-right.active,
  .carousel-inner .carousel-item-next {
    transform: translateX(33.333%);
  }

  .carousel-inner .carousel-item-left.active,
  .carousel-inner .carousel-item-prev {
    transform: translateX(-33.333%);
  }
}

.carousel-inner .carousel-item-right,
.carousel-inner .carousel-item-left {
  transform: translateX(0);
}
</style>
