import Loading from '../loading'

const ALLOWED_SIZE = ['mini', 'small', 'normal', 'large']
const ALLOWED_TYPE = ['default', 'danger', 'primary']

export default {
  name: 'sj-button',

  components: {
    [Loading.name]: Loading
  },

  props: {
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default',
      validator: value => ALLOWED_TYPE.indexOf(value) > -1
    },
    size: {
      type: String,
      default: 'normal',
      validator: value => ALLOWED_SIZE.indexOf(value) > -1
    }
  },

  methods: {
    onClick (event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event)
      }
    }
  },

  render (h) {
    const {type, loading, disabled, tag: Tag} = this

    return (
      <Tag
        type = {this.nativeType}
        disabled = {disabled}
        class = {[
          'sj-button',
          'sj-button--' + type,
          'sj-button--' + this.size,
          {
            'sj-button--disabled': disabled,
            'sj-button--loading': loading,
            'sj-button--block': this.block,
            'sj-button--bottom-action': this.bottomAction
          }
        ]}
        onClick = {this.onClick}
      >
        {loading
          ? <sj-loading
              class = "sj-button__icon-loading"
              type = "circle"
              color={type === 'default' ? 'black' : 'white'}
            />
          : null}
        <span class = "sj-button__text">
          {this.$slots.default}
        </span>
      </Tag>
    )
  }
}
