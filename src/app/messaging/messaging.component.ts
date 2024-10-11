import { Component } from '@angular/core';
import { WebView, LoadEventData } from '@nativescript/core';

@Component({
  selector: 'ns-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  webViewSrc = 'http://localhost:3000';

  onWebViewLoaded(args: LoadEventData) {
    const webview = args.object as WebView;
    if (webview.android) {
      webview.android.getSettings().setDomStorageEnabled(true);
      webview.android.getSettings().setMediaPlaybackRequiresUserGesture(false);
    }
  }
}