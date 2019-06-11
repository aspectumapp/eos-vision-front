import $ from 'jquery';

const contentBlock = $('.content');

contentBlock.on('click', function(event) {
  event.stopPropagation();
  console.log('Hello');
});
