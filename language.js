// / Language switcher logic
function setLanguage(lang) {
  $.getJSON(lang + '.json', function(data) {
    // Navbar
    $('#navmenu a[href="#hero"]').text(data.nav.home);
    $('#navmenu a[href="#about"]').text(data.nav.about);
    $('#navmenu a[href="#team"]').text(data.nav.team);
      $('#navmenu a[href="#galerie"]').text(data.nav.gallery);
    $('#navmenu a[href="#news"]').text(data.nav.news);
    $('#navmenu a[href="#contact"]').text(data.nav.contact);
    $('#current-lang').text(lang.toUpperCase());
    // Hero
    $('#hero-title').text(data.hero.welcome);
    $('#hero-desc').text(data.hero.description);
    $('#hero-btn').text(data.hero.start);
    // About
    $('#about-title').text(data.about.title);
    $('#about-learn').text(data.about.learn);
    $('#about-learn-more').text(data.about.learn_more);
    $('#about-history-title').text(data.about.history_title);
    $('#about-history-text').text(data.about.history_text);
    $('#about-btn').text(data.about.btn);
    $('#about-vision-title').text(data.cards.vision);
    $('#about-vision-text').text(data.cards.vision_text);
    $('#about-mission-title').text(data.cards.mission);
    $('#about-mission-text').text(data.cards.mission_text);
    $('#about-objectives-title').text(data.cards.objectives);
    $('#about-objectives-text').text(data.cards.objectives_text);
    $('#about-values-title').text(data.cards.values);
    $('#about-values-list').html((data.cards.values_list||[]).join('<br>'));
    $('#about-zone-title').text(data.cards.zone);
    $('#about-zone-text').text(data.cards.zone_text);
    $('#about-domains-title').text(data.domains.title);
    var domains = data.domains.list || [];
    $('#about-domains-list').html(domains.map(function(item){return '<li><i class="fa-solid fa-check"></i> ' + item + '</li>'}).join(''));
    // Team
    $('#team-title').text(data.team.title);
    $('#team-subtitle').text(data.team.subtitle);
    // Gallery
    $('#gallery-title').text(data.gallery.title);
    $('#gallery-subtitle .description-title').text(data.gallery.subtitle);
    if(data.gallery.items) {
      $('#gallery-item1-title').text(data.gallery.items[0]?.title||'');
      $('#gallery-item1-desc').text(data.gallery.items[0]?.desc||'');
      $('#gallery-item2-title').text(data.gallery.items[1]?.title||'');
      $('#gallery-item2-desc').text(data.gallery.items[1]?.desc||'');
      $('#gallery-item3-title').text(data.gallery.items[2]?.title||'');
      $('#gallery-item3-desc').text(data.gallery.items[2]?.desc||'');
      $('#gallery-item4-title').text(data.gallery.items[3]?.title||'');
      $('#gallery-item4-desc').text(data.gallery.items[3]?.desc||'');
    }
    // Activities/News
    $('#activities-title').text(data.activities.title);
    $('#activities-subtitle').text(data.activities.subtitle);
    $('#activities-news').text(data.activities.news||'');
    $('#activity1-title').text(data.activities.activity1.title);
    $('#activity1-date').text(data.activities.activity1.date);
    $('#activity1-desc').text(data.activities.activity1.desc);
    $('#activity2-title').text(data.activities.activity2.title);
    $('#activity2-date').text(data.activities.activity2.date);
    $('#activity2-desc').text(data.activities.activity2.desc);
    $('#activity3-title').text(data.activities.activity3.title);
    $('#activity3-date').text(data.activities.activity3.date);
    $('#activity3-desc').text(data.activities.activity3.desc);
    // Rapport chiffré
    $('#rapport-title').text(data.rapport.title||'');
    $('#rapport-desc').text(data.rapport.desc||'');
    $('#rapport1').text(data.rapport.stat1||'');
    $('#rapport2').text(data.rapport.stat2||'');
    $('#rapport3').text(data.rapport.stat3||'');
    // Partners
    $('#partners-title').text(data.partners.title||'');
    $('#partners-desc').text(data.partners.desc||'');
    // Partners carousel example (if you want to localize partner names, add here)
    // $('#partner1-name').text(data.partners.partner1_name||'');
    // Contact
    $('#contact-title').text(data.contact.title);
    $('#contact-subtitle').text(data.contact.subtitle);
    $('#contact-desc').text(data.contact.desc||'');
    $('#contact-address-title').text(data.contact.address);
    $('#contact-address1').text(data.contact.address_lines?.[0]||'');
    $('#contact-address2').text(data.contact.address_lines?.[1]||'');
    $('#contact-address3').text(data.contact.address_lines?.[2]||'');
    $('#contact-call-title').text(data.contact.call_us);
    $('#contact-phone').text(data.contact.phone);
    $('#contact-email-title').text(data.contact.email_us);
    $('#contact-email').text(data.contact.email);
    $('#contact-form-name').attr('placeholder', data.contact.form.name);
    $('#contact-form-email').attr('placeholder', data.contact.form.email);
    $('#contact-form-subject').attr('placeholder', data.contact.form.subject);
    $('#contact-form-message').attr('placeholder', data.contact.form.message);
    $('#contact-form-send').text(data.contact.form.send);
    $('#contact-form-loading').text(data.contact.form.loading);
    $('#contact-form-sent').text(data.contact.form.sent);
    // Contact form button (redundant for safety)
    $("#contact-form-send").text(data.contact.form.send);
    // Footer
    $('#footer-site-title').text((data.site_title||'').toUpperCase());
    $('#footer-about').text(data.footer.about);
    $('#footer-links-title').text(data.footer.links_title||'');
    $('#footer-link-home').text(data.footer.links.home);
    $('#footer-link-about').text(data.footer.links.about);
    $('#footer-link-team').text(data.footer.links.team);
    $('#footer-link-gallery').text(data.footer.links.gallery);
    $('#footer-link-news').text(data.footer.links.news);
    $('#footer-link-contact').text(data.footer.links.contact);
    $('#footer-contact-title').text(data.footer.contact_title);
    $('#footer-address1').text(data.contact.address_lines?.[0]||'');
    $('#footer-address2').text(data.contact.address_lines?.[1]||'');
    $('#footer-address3').text(data.contact.address_lines?.[2]||'');
    $('#footer-phone').text(data.contact.phone);
    $('#footer-email').text(data.contact.email);
    $('#footer-copyright').text(data.footer.copyright);
    $('#footer-credits').html(data.footer.credits);
  });
}

$(document).ready(function() {
  // Default language
  setLanguage('fr');
  // On language select
  $('.lang-select').click(function(e) {
    e.preventDefault();
    var lang = $(this).data('lang');
    setLanguage(lang);
  });
});