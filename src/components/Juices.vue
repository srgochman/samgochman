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
        :data-url="item.link"
        :style="
          `object-fit: ${item.doesContain !== undefined ? 'contain' : 'cover'}`
        "
      />
      <video
        v-if="item.mediaType == 'video'"
        ref="vid"
        loop
        playsinline
        disablepictureinpicture
        controlslist="nodownload nofullscreen"
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
export default {
  name: "Juices",
  data() {
    return {
      chunkSize: 4,
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
      ]
    };
  },
  mounted() {
    $("video").prop("volume", 0.5);

    const vid = $("video")[0];
    $("button").click(function() {
      if (vid.paused || vid.ended) {
        vid.play();
      } else {
        vid.pause();
      }
    });

    this.loadNextChunk(this.chunkSize);
    this.loadNextChunk(this.chunkSize);
  },
  methods: {
    loadNextChunk(chunkSize) {
      const vm = this;
      const loadedChunkItems = vm.loadedItems;
      // loop through each image-container in chunk
      for (let i = loadedChunkItems; i < loadedChunkItems + chunkSize; i++) {
        // $(".image-container").each(function() {
        console.log(
          "checking item",
          $(".image-container")[i].dataset.indexNumber
        );
        // move up to next chunk
        // if ($(".image-container")[i].dataset.indexNumber < vm.loadedItems) {
        //   // console.log("redundant");
        //   // return false;
        //   console.log("skipping");
        //   return;
        // }

        let curItem = $(".image-container")[i].children[0];
        // if item is an image:
        if (curItem.nodeName === "IMG") {
          // load image
          curItem.src = curItem.dataset.url;
        } else if (curItem.nodeName === "VIDEO") {
          curItem.poster = curItem.dataset.url; // video's poster
          curItem.children[0].src = curItem.children[0].dataset.url; // video's source
          $(".image-container")[i].children[1].classList.remove("hidden"); // play icon
        }
        vm.loadedItems++;
        console.log(vm.loadedItems + " items loaded");
        // breaks loop if item is not in current chunk:
        // if (vm.loadedItems >= chunkSize) {
        //   break;
        // }
        // return vm.loadedItems < chunkSize;
      }
    }
    // loadItems() {
    //   const vm = this;
    //   // $(".image-container").each(function() {
    //   //   console.log(this.dataset.indexNumber);
    //   $(".image-container>img").each(function() {
    //     console.log("checking image", this.dataset.indexNumber);
    //     if (
    //       this.dataset.indexNumber <
    //       Math.floor(vm.loadedItems / vm.chunkSize) * vm.chunkSize +
    //         vm.chunkSize
    //     ) {
    //       // console.log(this.dataset.indexNumber);
    //       this.src = this.dataset.url; // load image
    //       vm.loadedItems++;
    //       console.log("loaded image, loadedItems:", vm.loadedItems);
    //     }
    //   });
    //   $(".image-container>video").each(function() {
    //     if (
    //       this.dataset.indexNumber <
    //       Math.floor(vm.loadedItems / vm.chunkSize) * vm.chunkSize +
    //         vm.chunkSize
    //     ) {
    //       // console.log(this.dataset.indexNumber);
    //       this.poster = this.dataset.url; // load image
    //       // this.loadedItems++;
    //     }
    //   });
    //   $(".image-container>video>source").each(function() {
    //     if (
    //       this.dataset.indexNumber <
    //       Math.floor(vm.loadedItems / vm.chunkSize) * vm.chunkSize +
    //         vm.chunkSize
    //     ) {
    //       // console.log(this.dataset.indexNumber);
    //       this.src = this.dataset.url; // load image
    //       vm.loadedItems++;
    //       console.log(vm.loadedItems);
    //     }
    //   });
    //   // });
    // }
  }
};
</script>

<style lang="scss" scoped>
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
