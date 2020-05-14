const users = [];
const articles = [];

export default {
  getUser: function(userId) {
    return users.find(user => user.userId === userId);
  },
  getArticlesByUser: function(userId) {
    return articles.filter(article => articles.userId === userId);
  },
  getArticles: function() {
    return articles;
  },
  getArticlesWithUser: function() {
    return this.getArticles().map(article => ({
      ...article,
      user: this.getUser(article.userId)
    }));
  },
  createUser: function(name, firstname) {
    const userId = name + firstname;
    const user = users.find(u => u.id === userId);
    if (user) {
      throw new Error("User already exists");
    }
    const u = {
      name,
      firstname,
      userId
    };
    users.push(u);
    return u;
  },

  createUserSafe: function(name, firstname) {
    try {
      return this.createUser(name, firstname);
    } catch (e) {
      return this.getUser(name + firstname);
    }
  },

  createArticle: function(userId, header, content) {
    const user = users.find(u => u.userId === userId);
    if (!user) {
      throw new Error("User not found");
    }
    const a = {
      userId,
      header,
      content
    };
    articles.push(a);
    return a;
  }
};
