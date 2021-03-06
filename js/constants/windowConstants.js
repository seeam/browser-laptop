/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const mapValuesByKeys = require('../lib/functional').mapValuesByKeys

const _ = null
const windowConstants = {
  WINDOW_SET_URL: _,
  WINDOW_SET_NAVBAR_INPUT: _,
  WINDOW_NEW_FRAME: _,
  WINDOW_CLOSE_FRAME: _,
  WINDOW_SET_ACTIVE_FRAME: _,
  WINDOW_SET_PREVIEW_FRAME: _,
  WINDOW_SET_TAB_PAGE_INDEX: _,
  WINDOW_SET_IS_BEING_DRAGGED_OVER_DETAIL: _,
  WINDOW_TAB_MOVE: _,
  WINDOW_SET_THEME_COLOR: _,
  WINDOW_UPDATE_BACK_FORWARD: _,
  WINDOW_WEBVIEW_LOAD_END: _,
  WINDOW_SET_NAVBAR_FOCUSED: _,
  WINDOW_SET_LINK_HOVER_PREVIEW: _,
  WINDOW_SET_URL_BAR_SUGGESTIONS: _,
  WINDOW_SET_URL_BAR_PREVIEW: _,
  WINDOW_SET_URL_BAR_SUGGESTION_SEARCH_RESULTS: _,
  WINDOW_WEBVIEW_LOAD_START: _,
  WINDOW_SET_FRAME_TITLE: _,
  WINDOW_SET_LOCATION: _, // sets location of a frame
  WINDOW_SET_URL_BAR_ACTIVE: _, // whether the URL bar is being typed in
  WINDOW_UNDO_CLOSED_FRAME: _,
  WINDOW_SET_ACTIVE_FRAME_SHORTCUT: _,
  WINDOW_SET_URL_BAR_SELECTED: _,
  WINDOW_SET_SEARCH_DETAIL: _,
  WINDOW_SET_FIND_DETAIL: _,
  WINDOW_SET_BOOKMARK_DETAIL: _, // If set, also indicates that add/edit is shown
  WINDOW_SET_CONTEXT_MENU_DETAIL: _, // If set, also indicates that the context menu is shown
  WINDOW_SET_AUDIO_MUTED: _,
  WINDOW_SET_AUDIO_PLAYBACK_ACTIVE: _,
  WINDOW_SET_FAVICON: _,
  WINDOW_SET_MOUSE_IN_TITLEBAR: _,
  WINDOW_SET_FINDBAR_SHOWN: _, // whether the findbar is shown
  WINDOW_SET_FINDBAR_SELECTED: _, // whether the findbar is active
  WINDOW_SET_PINNED: _, // Whehter the current tab is pinned or not
  WINDOW_SET_SITE_INFO_VISIBLE: _, // Whether or not to show site info like # of blocked ads
  WINDOW_SET_RELEASE_NOTES_VISIBLE: _, // Whether or not to show release notes
  WINDOW_SET_BLOCKED_BY: _, // Whether or not to show site info like # of blocked ads
  WINDOW_SET_SECURITY_STATE: _,
  WINDOW_SET_LOGIN_REQUIRED_DETAIL: _,
  WINDOW_SET_STATE: _,
  WINDOW_ZOOM_IN: _,
  WINDOW_ZOOM_OUT: _,
  WINDOW_ZOOM_RESET: _
}

module.exports = mapValuesByKeys(windowConstants)
