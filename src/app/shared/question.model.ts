import {OptionsModel} from './options.model';

export class QuestionModel {
    questionId!: number;
    questionText!: string;
    options!: OptionsModel[];
    answer!: string;
    explanation!: string;
    selectedOption!: string;
}