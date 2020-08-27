<template>
  <div id="juices-grid-container">
    <div
      class="image-container"
      v-for="(item, index) in items"
      :key="index"
      :data-index-number="index"
    >
      <img
        v-if="item.mediaType == 'img'"
        class="invisible"
        :data-url="item.link"
        :style="
          `object-fit: ${item.doesContain !== undefined ? 'contain' : 'cover'}`
        "
      />
      <video
        v-if="item.mediaType == 'video'"
        class="invisible"
        ref="vid"
        loop
        playsinline
        preload="none"
        :data-url="item.poster"
        :style="
          `object-fit: ${item.doesContain !== undefined ? 'contain' : 'cover'}`
        "
        onclick="this.paused ? this.play() : this.pause();"
      >
        <source :data-url="item.link" type="video/mp4" />
      </video>
      <svg
        v-if="item.mediaType == 'video'"
        class="play hidden"
        width="288"
        height="320"
      >
        <use href="../assets/play.svg#Layer_2"></use>
      </svg>
    </div>
  </div>
</template>

<script>
//  && item.ready == true

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Juices",
  data() {
    return {
      chunkSize: 3,
      loadedItems: 0,
      items: [
        {
          link: "/photos/juices/astronauts.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/stars.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/exposure_half_crop.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/particle_tame.mp4",
          mediaType: "video",
          poster: "/photos/juices/particle_tame.jpg"
        },
        {
          link: "/photos/juices/blob_tame.mp4",
          mediaType: "video",
          poster: "/photos/juices/blob_tame.jpg"
        },
        {
          link: "/photos/juices/rounded_rectangle.mp4",
          mediaType: "video",
          poster: "/photos/juices/rounded_rectangle.jpg"
        },
        {
          link: "/photos/juices/IMG_0741.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/IMG_0730.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/IMG_0766.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/portrait_dots.mp4",
          mediaType: "video",
          poster: "/photos/juices/portrait_dots.jpg"
        },
        {
          link: "/photos/juices/grid_fabric.mp4",
          mediaType: "video",
          poster: "/photos/juices/grid_fabric.jpg"
        },
        {
          link: "/photos/juices/spokes.mp4",
          mediaType: "video",
          poster: "/photos/juices/spokes.jpg"
        },
        {
          link: "/photos/juices/IMG_0168.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/IMG_9951.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/IMG_9965.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/galaxies.mp4",
          mediaType: "video",
          poster: "/photos/juices/galaxies.jpg"
        },
        {
          link: "/photos/juices/blur_dots.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/glow_rings.mp4",
          mediaType: "video",
          poster: "/photos/juices/glow_rings.jpg"
        },
        {
          link: "/photos/juices/keyboard.mp4",
          mediaType: "video",
          poster: "/photos/juices/keyboard.jpg",
          doesContain: true
        },
        {
          link: "/photos/juices/turns.jpg",
          mediaType: "img"
        },
        {
          link: "/photos/juices/dotted_shapes.mp4",
          mediaType: "video",
          poster: "/photos/juices/dotted_shapes.jpg"
        }
      ],
      trig: null
    };
  },
  mounted() {
    const vm = this;
    $(".image-container").each(function() {
      if (this.dataset.indexNumber % vm.chunkSize !== 0) return;
      // vm.trig = gsap.timeline({
      gsap.timeline({
        scrollTrigger: {
          trigger: this,
          start: "top 83%",
          // end: "bottom top",
          once: true,
          onEnter: () => {
            // console.log("enter");
            // vm.loadNextChunk(vm.chunkSize, vm);

            // store number of loaded items at last chunk
            const loadedChunkItems = vm.loadedItems;
            // loop through each image-container in current chunk
            // loop until shorter of: end of chunk or end of gallery
            for (
              let i = loadedChunkItems;
              i <
              Math.min(
                loadedChunkItems + vm.chunkSize,
                $(".image-container").length
              );
              i++
            ) {
              // break if i in for loop goes beyond length of items
              // happens when there is a partial chunk leftover
              // if (i >= $(".image-container").length) {
              //   break;
              // }
              let curItem = $(".image-container")[i].children[0];
              if (curItem.nodeName === "IMG") {
                curItem.src = curItem.dataset.url; // load image
              } else if (curItem.nodeName === "VIDEO") {
                curItem.poster = curItem.dataset.url; // load video's poster
                curItem.children[0].src = curItem.children[0].dataset.url; // load video's source
                curItem.load();
                $(".image-container")[i].children[1].classList.remove(
                  "invisible"
                ); // load play icon
              }
              curItem.classList.remove("invisible");
              vm.loadedItems++;
            }
          },
          markers: true
        }
      });
      // .from(this, {
      //   autoAlpha: 0,
      //   duration: 0.5,
      //   ease: "power1.inOut"
      // });
    });

    $("video").prop("volume", 0.5);
  },
  methods: {
    // loadNextChunk(chunkSize, vm) {
    //   // const vm = this;
    //   // store number of items loaded before this chunk
    //   // used in loop to move up to skip past chunks
    //   const loadedChunkItems = vm.loadedItems;
    //   // loop through each image-container in current chunk
    //   for (let i = loadedChunkItems; i < loadedChunkItems + chunkSize; i++) {
    //     // console.log("checking item", $(".image-container")[i].dataset.indexNumber);
    //     let curItem = $(".image-container")[i].children[0];
    //     if (curItem.nodeName === "IMG") {
    //       curItem.src = curItem.dataset.url; // load image
    //     } else if (curItem.nodeName === "VIDEO") {
    //       curItem.poster = curItem.dataset.url; // load video's poster
    //       curItem.children[0].src = curItem.children[0].dataset.url; // load video's source
    //       $(".image-container")[i].children[1].classList.remove("hidden"); // load play icon
    //     }
    //     vm.loadedItems++;
    //   }
    // }
  },
  // directives: {
  //   lazyload: {
  //     inserted: el => {
  //       function loadImage() {
  //         const imageElement = Array.from(el.children).find(
  //           el => el.nodeName === "IMG"
  //         );
  //         const videoElement = Array.from(el.children).find(
  //           el => el.nodeName === "VIDEO"
  //         );
  //         if (imageElement) {
  //           imageElement.addEventListener("load", () => {
  //             setTimeout(() => el.classList.add("loaded"), 200);
  //           });
  //           imageElement.addEventListener("error", () => console.log("error"));
  //           imageElement.src = imageElement.dataset.url;
  //         } else if (videoElement) {
  //           console.log(videoElement.children[0].dataset.url);
  //           videoElement.children[0].addEventListener("load", () => {
  //             setTimeout(() => {
  //               el.classList.add("loaded");
  //               console.log("loaded");
  //             }, 200);
  //           });
  //           videoElement.children[0].addEventListener("error", () =>
  //             console.log("error")
  //           );
  //           videoElement.children[0].src = videoElement.children[0].dataset.url;
  //           videoElement.load();
  //           videoElement.poster = videoElement.dataset.url;
  //         }
  //       }

  //       function handleIntersect(entries, observer) {
  //         entries.forEach(entry => {
  //           if (entry.isIntersecting) {
  //             loadImage();
  //             observer.unobserve(el);
  //           }
  //         });
  //       }

  //       function createObserver() {
  //         const options = {
  //           root: null,
  //           threshold: "0.5"
  //         };
  //         const observer = new IntersectionObserver(handleIntersect, options);
  //         observer.observe(el);
  //       }
  //       if (window["IntersectionObserver"]) {
  //         createObserver();
  //       } else {
  //         loadImage();
  //       }
  //     }
  //   }
  // },
  beforeDestroy() {
    // PROBABLY SHOULD BE AN ARRAY OF TRIGGERS THAT GETS KILLED EACH
    // if (this.$router.history.current.name === "Sam Gochman") {
    //   this.trig.kill();
    // }
  }
};
</script>

<style lang="scss" scoped>
.invisible {
  opacity: 0;
}

#juices-grid-container {
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-columns: repeat(3, 1fr);
  // grid-auto-rows: 1fr;
  // grid-gap: 1.5rem;
  grid-gap: calc(max(1.5vw, 20px));

  .image-container {
    background-color: white;
    display: grid;
    place-items: center;
    // width: calc(1440px / 3 - 3 * max(1.5vw, 20px));
    // height: calc(1440px / 3 - 3 * max(1.5vw, 20px));
    position: relative;

    // for aspect ratio
    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      padding-bottom: 100%;
      grid-area: 1 / 1 / 2 / 2;
    }

    img,
    video {
      width: 100%;
      height: 100%;
      transition: opacity 200ms ease-in-out;
      transition-delay: 500ms;

      position: absolute; // fixes Safari issue of unconstrained height
      // max-width: 100%;
      // top: 0;
      // bottom: 0;
      // right: 0;
      // left: 0;
      // margin: auto;

      // background-size: cover;
      object-fit: cover;
      object-position: center;
      grid-area: 1 / 1 / 2 / 2;

      &:focus {
        outline: none;
      }
    }

    .play {
      pointer-events: none;
      position: absolute;
      bottom: 15px;
      left: 15px;
      transform: scale(0.04);
      transform-origin: left bottom;
      filter: drop-shadow(0 0 150px rgba(0, 0, 0, 0.8));
      // opacity: 0.7;
    }
  }
}

@media only screen and (max-width: 425px) {
  #juices-grid-container {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
}
</style>
