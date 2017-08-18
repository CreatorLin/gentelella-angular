import { Component, OnInit } from '@angular/core';

import { SidebarMenuService } from './sidebar-menu.service';
import MenuItem from './menuItem';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  menu: MenuItem[];

  $BODY = $('body');
  $SIDEBAR_FOOTER = $('.sidebar-footer');
  $LEFT_COL = $('.left_col');
  $RIGHT_COL = $('.right_col');
  $NAV_MENU = $('.nav_menu');
  $FOOTER = $('footer');


  constructor(private sidebarMenuService: SidebarMenuService) { }

  ngOnInit() {
    this.sidebarMenuService.getMenu().then(menu => this.menu = menu);
  }

  onSelect(event: any): void {
    var my = this;

    var $li = $(event.target).parents("li");

    if ($li.is('.active')) {
      $li.removeClass('active active-sm');
      $('ul:first', $li).slideUp(function () {
        my.setContentHeight();
      });
    } else {
      // prevent closing menu if we are on child menu
      if (!$li.parent().is('.child_menu')) {
        $('#sidebar-menu').find('li').removeClass('active active-sm');
        $('#sidebar-menu').find('li ul').slideUp();
      }

      $li.addClass('active');

      $('ul:first', $li).slideDown(function () {
        my.setContentHeight();
      });
    }
  }
    setContentHeight() {
      // reset height
      this.$RIGHT_COL.css('min-height', $(window).height());

      var bodyHeight = this.$BODY.outerHeight(),
        footerHeight = this.$BODY.hasClass('footer_fixed') ? -10 : this.$FOOTER.height(),
        leftColHeight = this.$LEFT_COL.eq(1).height() + this.$SIDEBAR_FOOTER.height(),
        contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

      // normalize content
      contentHeight -= this.$NAV_MENU.height() + footerHeight;

      this.$RIGHT_COL.css('min-height', contentHeight);
    }
  }
