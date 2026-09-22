/**
 * MathPulse K-12 - Search & Multi-Filter Engine
 */

export class SearchFilterEngine {
  constructor(topics) {
    this.topics = topics;
    this.currentGrade = "all";
    this.currentCategory = "All";
    this.currentQuery = "";
    this.statusFilter = "all"; // 'all' | 'completed' | 'bookmarked'
  }

  setGrade(grade) {
    this.currentGrade = grade;
  }

  setCategory(category) {
    this.currentCategory = category;
  }

  setQuery(query) {
    this.currentQuery = query.trim().toLowerCase();
  }

  setStatusFilter(status) {
    this.statusFilter = status;
  }

  filter(storageManager) {
    const completedIds = storageManager ? storageManager.getCompletedTopics() : [];
    const bookmarkIds = storageManager ? storageManager.getBookmarks() : [];

    return this.topics.filter(topic => {
      // 1. Grade Band Match
      if (this.currentGrade !== "all" && topic.gradeBand !== this.currentGrade) {
        return false;
      }

      // 2. Category Match
      if (this.currentCategory !== "All" && topic.category !== this.currentCategory) {
        return false;
      }

      // 3. Status Match (Completed / Bookmarked)
      if (this.statusFilter === "completed" && !completedIds.includes(topic.id)) {
        return false;
      }
      if (this.statusFilter === "bookmarked" && !bookmarkIds.includes(topic.id)) {
        return false;
      }

      // 4. Keyword Search Match
      if (this.currentQuery) {
        const titleMatch = topic.title.toLowerCase().includes(this.currentQuery);
        const summaryMatch = topic.summary.toLowerCase().includes(this.currentQuery);
        const categoryMatch = topic.category.toLowerCase().includes(this.currentQuery);
        const conceptMatch = topic.keyConcept.toLowerCase().includes(this.currentQuery);
        const formulaMatch = topic.formula ? topic.formula.toLowerCase().includes(this.currentQuery) : false;

        return titleMatch || summaryMatch || categoryMatch || conceptMatch || formulaMatch;
      }

      return true;
    });
  }
}
