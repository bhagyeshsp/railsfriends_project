import Rails from '@rails/ujs';
import Turbolinks from 'turbolinks';

Turbolinks.start();
Rails.start();

document.addEventListener('turbolinks:load', () => {
  Rails.start();
});
