<template>
    <div class="article">
        <div class="container">
            <div class="content" v-html="markdown"></div>
        </div>
        <foot />
    </div>
</template>

<script>
    import Prism from 'prismjs'
    import Remarkable from 'remarkable'
    import { Utils } from '../helpers/utils.js'
    // Components
    import Foot from '../layout/foot.vue'
    export default {
        components: { Foot },
        data: function () {
            return {
                title: this.$route.name,
                file: undefined,
                markdown: undefined,
                calendar: undefined
          }
        },
        mounted() {
            const fiile = this.$route.path + '.md';
            const md = new Remarkable({
                langPrefix: 'hljs language-'
            });
            Utils.readFile(fiile, (responseText) => {
                this.markdown = md.render(responseText);
                this.$nextTick(function () {
                    Prism.highlightAll();
                    this.createDemo();
                    const f = new Function (this.initHelloWeek());
                    f();
                });
            });
        },
        methods: {
            initHelloWeek() {
                return this.$el.querySelector('.language-js').textContent;
            },
            createDemo() {
                const hedingDemo = this.$el.querySelector('h4');
                const parentDiv = hedingDemo.parentNode;
                const htmlDemo = this.$el.querySelector('.language-html').textContent;
                const demo = document.createElement('div');
                demo.innerHTML = htmlDemo;
                demo.classList.add('demo');
                parentDiv.insertBefore(demo, hedingDemo);
            }
        }
    }
</script>
<style lang="css">
    @import "./../../assets/prism/prism.css";
</style>


