(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{534:function(t,n,a){"use strict";a.r(n);var e=a(20),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"第9章-混合对象类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第9章-混合对象类"}},[t._v("#")]),t._v(" 第9章 混合对象类")]),t._v(" "),a("h4",{attrs:{id:"_1-1-类理论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-类理论"}},[t._v("#")]),t._v(" 1.1 类理论")]),t._v(" "),a("h4",{attrs:{id:"构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),a("p",[t._v("类实例是由一个特殊的类方法构造的，这个方法名通常和类名相同，被称为构造函数。")]),t._v(" "),a("h5",{attrs:{id:"_1-2-类的机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-类的机制"}},[t._v("#")]),t._v(" 1.2 类的机制")]),t._v(" "),a("p",[t._v("类和实例对象之间的关系看作之间关系而不是间接关系更好。因为所谓的类的关系，都是复制而已。")]),t._v(" "),a("p",[t._v("构造函数就是复制的关键点。他的目的就是完成复制的关键。术语叫做初始化对象。")]),t._v(" "),a("p",[t._v("构造函数的特点")]),t._v(" "),a("ul",[a("li",[t._v("使用new来调用构造函数")]),t._v(" "),a("li",[t._v("函数名与类名相同")]),t._v(" "),a("li",[t._v("new的过程")])]),t._v(" "),a("h5",{attrs:{id:"_1-3-类的继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-类的继承"}},[t._v("#")]),t._v(" 1.3 类的继承")]),t._v(" "),a("p",[t._v("定义好一个子类之后，相对于父类来说它就是一个独立并且完全不同的类。子类会包含父类行为的原始副本，但是也可以重写所有继承的行为甚至定义新行为。")]),t._v(" "),a("h4",{attrs:{id:"多态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[t._v("#")]),t._v(" 多态")]),t._v(" "),a("p",[t._v("任何方法都可以引用继承层次中高层的方法（无论高层的方法名和当前方法名是否相同）。在继承链的不同层次中一个方法名可以被多次定义，当调用方法时会自动选择合适的定义。")]),t._v(" "),a("p",[t._v("类的多态包含两个方面：相对和重写")]),t._v(" "),a("p",[t._v("『多态』中的『相对多态』指的是，任何方法都可以引用继承层次中高层的方法（无论高层的方法是否与当前方法名相同）。")]),t._v(" "),a("p",[t._v("『重写』指的是在继承链的不同层次中一个方法名可以被多次定义，当调用方法时会自动选择合适的定义。")]),t._v(" "),a("p",[t._v("JavaScript中父类和子类的关系只存在于两者构造函数对应的"),a("code",[t._v("prototype")]),t._v("对象之间，他们的构造函数并不存在直接联系，所以无法简单的实现二者的相对有信用（ES6的"),a("code",[t._v("class")]),t._v("中可以用"),a("code",[t._v("super")]),t._v("来解决这个问题）。")]),t._v(" "),a("p",[t._v("方法的多态性取决于是在哪个类的实例中引用它。")]),t._v(" "),a("p",[t._v("在继承过程中，子类得到的是继承自父类行为的一份副本，子类对继承得到的方法不会影响父类中的影响。")]),t._v(" "),a("p",[t._v("多态并不表示父类和子类有关联，子类得到的只是父类的一份副本。")]),t._v(" "),a("h5",{attrs:{id:"_1-4-混入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-混入"}},[t._v("#")]),t._v(" 1.4 混入")]),t._v(" "),a("p",[t._v("混入就是用来模拟类的复制行为。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("显示混入")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("JS中的继承也就是对象的引用的复制。")])]),t._v(" "),a("li",[a("div",{staticClass:"language-javascriptjava extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function mixin(source, target) {\n for(const key in source) {\n   if(!(key in target)) {\n     target[key] = source[key]\n   }\n }\n return target\n}\n \nvar Vehicle = {\n engines: 1,\n ignition() {\n   console.log('turn on my engine')\n },\n drive() {\n   this.ignition();\n   console.log('start moving forward')\n }\n};\nvar Car = mixin(Vehicle, {\n wheels: 4,\n drive() {\n   Vehicle.drive.call(this);\n   console.log(`${this.wheels} wheels`)\n }\n})\n")])])]),a("p",[t._v("上面的函数并没有被复制，复制的是函数引用。")])])])]),t._v(" "),a("li",[a("p",[t._v("隐式混入")])]),t._v(" "),a("li",[a("div",{staticClass:"language-javascriptjava extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('function Animal(name) {\n   this.name = name\n}\nAnimal.prototype.showName = function () {\n   console.log("我的名字是" + this.name)\n}\n \nfunction Dog(name,color) {\n   //强制把animal中的this，绑定当new出来的对象，\n   //不知道为啥this指向new出来的对象的同学\n   //请看前面this部分，以及new的几个过程\n   Animal.call(this,name)//只能继承属性\n   this.color = color\n}\nDog.prototype = new Animal()\nDog.prototype.constructor = Dog\n')])])])]),t._v(" "),a("li")])])}),[],!1,null,null,null);n.default=s.exports}}]);