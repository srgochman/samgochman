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
        class="play invisible"
        width="288"
        height="320"
      >
        <use href="../assets/play.svg#Layer_2"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Juices",
  data() {
    return {
      chunkSize: 6,
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
      triggers: []
    };
  },
  mounted() {
    this.$router.app.$root.$once("transitionScroll", () => {
      this.$router.app.$nextTick(() => {
        if (this.$router.history.current.name === "Sam Gochman") {
          const vm = this;
          // console.log("start of mounted", this.triggers);
          this.triggers = [];
          $(".image-container").each(function() {
            if (this.dataset.indexNumber % vm.chunkSize !== 0) return;
            // vm.trig = gsap.timeline({
            const trig = gsap.timeline({
              scrollTrigger: {
                trigger: this,
                start: "top 90%",
                markers: true,
                once: true,
                onEnter: () => {
                  // store number of loaded items at last chunk
                  const loadedChunkItems = vm.loadedItems;
                  // loop through each image-container in current chunk
                  // until you reach either the end of chunk or the end of gallery
                  // eslint-disable-next-line prettier/prettier
                  for (let i = loadedChunkItems; i < Math.min(loadedChunkItems + vm.chunkSize, $(".image-container").length); i++) {
                    let curItem = $(".image-container")[i].children[0];
                    if (curItem.nodeName === "IMG") {
                      curItem.src = curItem.dataset.url; // provide image
                    } else if (curItem.nodeName === "VIDEO") {
                      curItem.poster = curItem.dataset.url; // provide video's poster
                      curItem.children[0].src = curItem.children[0].dataset.url; // provide video's source
                      curItem.load();
                      $(".image-container")[i].children[1].classList.remove(
                        "invisible"
                      ); // provide play icon
                    }
                    curItem.classList.remove("invisible");
                    vm.loadedItems++;
                  }
                }
              }
            });
            vm.triggers.push(trig);
            // console.log("trigger created");
          });
          // console.log("event listener set");
          EventBus.$on("destroy_triggers", this.killTriggers);
        }
        $("video").prop("volume", 0.5);
        // console.log("end of mounted", this.triggers);
      });
    });
  },
  methods: {
    killTriggers() {
      this.triggers.forEach(trig => {
        if (trig.scrollTrigger) {
          trig.scrollTrigger.kill();
        }
      });
      // this.triggers.forEach(trig => console.log(trig.scrollTrigger));
      // for (let i = 0; i < this.triggers.length; i++) {
      //   // console.log(this.triggers);
      //   if (this.triggers[i].scrollTrigger) {
      //     // console.log("killed trigger", i);
      //     // console.log("timeline w trigger", this.triggers[i].scrollTrigger);
      //     this.triggers[i].scrollTrigger.kill();
      //   }
      // }
      EventBus.$off("destroy_triggers", this.killTriggers);
    }
  }
};
</script>

<style lang="scss" scoped>
.invisible {
  opacity: 0;
}

.play {
  transition: opacity 200ms ease-in-out;
  transition-delay: 350ms;
}

#juices-grid-container {
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-columns: repeat(3, 1fr);
  // grid-auto-rows: 1fr;
  // grid-gap: 1.5em;
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
      transition-delay: 350ms;

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
    grid-gap: 2em;
  }
}
</style>
