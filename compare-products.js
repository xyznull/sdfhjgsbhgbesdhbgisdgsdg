const{Core,Utils,Events}=Global,{$fetch,$replaceContent}=Utils;customElements.define("compare-products",class extends Core{propTypes={"product-url":String};render(){this.sub(Events.VARIANT_CHANGE,this._refresh,{global:!0})}async _refresh({variantId}){const $doc=await this._fetchSection(variantId);$replaceContent(this,$doc)}_fetchSection(variantId){return $fetch(this.prop("product-url"),{sectionId:this.sectionId,params:{variant:variantId},select:`[section-id="${this.sectionId}"]`})}});
//# sourceMappingURL=/cdn/shop/t/17/assets/compare-products.js.map?v=103373960982370089751718817531
