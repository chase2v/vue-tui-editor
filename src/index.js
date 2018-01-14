import TuiEditor from 'tui-editor'
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import './codemirror.css'

export default {
    name: 'tui-editor',
    template: '<div class="vue-tui-editor"></div>',

    props: {
        options: Object
    },

    mounted() {
        this.editor = new TuiEditor(Object.assign({
            el: this.$el,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: '300px'
        }, this.options))
    }
}
