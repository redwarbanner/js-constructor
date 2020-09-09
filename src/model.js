import image from './assets/software-15.png';
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks';
import {css} from './utils';

const text = `
Простенький конструктор сайтов на чистом JS, с соблюдением приципов SOLID и ООП. 
Для добавления нового блока, необходимо ввести значение поля и задать набор css свойств.
`;

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
        tag: 'h2',
        styles: css({
            background: 'rgb(52,84,249) linear-gradient(90deg, rgba(52,84,249,1) 0%, rgba(211,70,252,1) 100%);',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
            'text-shadow': '1px 1px 2px black, 0 0 1em white;'
        })
    }),

    new ImageBlock(image, {
        styles: 'background: rgb(52,84,249);\n' +
            'background: linear-gradient(90deg, rgba(52,84,249,1) 0%, rgba(211,70,252,1) 100%);' +
            'display: flex; justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 100%; '
    }),

    new TextColumnsBlock([
        'Приложение на чистом JS',
        'Применение принципов SOLID',
        'Практическое применение ООП',

    ], {
        styles: 'background: #eef1f7; color: #000; font-weight: bold;  text-align: center; padding: 10px; margin-bottom: 20px; margin-top: 20px;'
    }),

    new TextBlock(text, {
        styles: 'padding: 1rem; background: #eef1f7; color: black; font-weight: bold; text-align: center;'
    }),

]


