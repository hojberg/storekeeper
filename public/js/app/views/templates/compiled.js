(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['order_list/layout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var self=this;


  return "<thead>\n  <tr>\n    <th>Order number</th>\n    <th>Amount</th>\n    <th>Status</th>\n  </tr>\n</thead>\n<tbody></tbody>\n";});
templates['order_list_item/layout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<td>";
  stack1 = helpers.number || depth0.number
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "number", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n<td>";
  stack1 = helpers.totalAmount || depth0.totalAmount
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "totalAmount", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n<td>";
  stack1 = helpers.status || depth0.status
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "status", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n";
  return buffer;});
templates['orders/layout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var self=this;


  return "<ul class='list_filter'>\n  <li><a href=\"#orders\">Recent</a></li>\n</ul>\n<div class='list'></div>\n";});
})()