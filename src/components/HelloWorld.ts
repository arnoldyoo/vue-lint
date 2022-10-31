import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    @Prop() protected msg!: string;

    protected num = () => {
        console.log('protected');
    };

    private test = () => {
        console.log('test');
    };
}
