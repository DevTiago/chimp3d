<template>
  <carousel :per-page="3" :navigationEnabled="true" class="mt-10">
    <slide v-for="(item, i) in portfolioContent" :key="i">
      <div class="im_portfolio">
        <div class="thumbnail_inner">
          <div class="thumbnail">
            <img class="w-100" :src="item.imageUrl" alt="Portfolio Images" />
          </div>
        </div>

        <div class="content">
          <div class="inner">
            <div class="portfolio_heading">
              <h4 class="heading-title">
                <span>{{ item.name }}</span>
              </h4>
            </div>
            <div class="portfolio_hover">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { db } from "@/main";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      portfolioContent: [],
    };
  },

  async created() {
    const doc = await db.collection("portfolio")
        .where('isActive', '==', true)
        .get();


    doc.forEach((doc) => {
      this.portfolioContent.push(doc.data());
    });
  },
};
</script>

<style >
.im_portfolio {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 280px!important;
}

.thumbnail {
  height: 100%;
}

.thumbnail img {
  height: 100%;
}
</style>
