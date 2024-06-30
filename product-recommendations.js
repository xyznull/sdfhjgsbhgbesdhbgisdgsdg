const{Core,Events,Utils}=Global,{$show}=Utils;customElements.define("product-recommendations",class extends Core{render(){this.sub(Events.RECOMMENDATIONS_LOADED,this._handleRecommendationsLoad,{once:!0})}_handleRecommendationsLoad(data){data?.error||$show(this)}});
//# sourceMappingURL=/cdn/shop/t/17/assets/product-recommendations.js.map?v=72281409483528134311718817534
