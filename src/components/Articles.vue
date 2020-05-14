<template>
  <div v-if="articles" class="content">
    <div v-for="(article, index) in articles" :key="index" class="contentItem">
      <h2>{{article.header}}</h2>
      <p>{{article.content}}</p>
      <div class="contentItemInfo">
        <span>06.05.2020 14:00</span>
        <div class="authorInitials">{{getInitialsByUser(article.user)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "./../service";
export default {
  name: "Help",
  data: function() {
    return {
      articles: undefined
    };
  },
  created: function() {
    this.articles = Service.getArticlesWithUser();
  },
  methods: {
    getInitialsByUser: function(user) {
      return user.name[0] + user.firstname[0];
    }
  }
};
</script>