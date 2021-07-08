import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { RouterEvent, EntryRoutingService, EntryZoneService } from 'ngx-elements-router';
import { Subject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-entry',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./user-entry.component.scss']
})
export class UserEntryComponent implements OnChanges, OnDestroy {

  private route$ = new Subject<string | undefined>();
  @Input() route?: string;
  @Output() routeChange = new EventEmitter<RouterEvent>();

  @Input() microtaskEmpty$?: Observable<void>;
  microtaskEmpty$$ = new Subject<Observable<void>>();

  private readonly subscription: Subscription;

  constructor(
    private entryRoutingService: EntryRoutingService,
    private entryZoneService: EntryZoneService
  ) {
    const routingSubscription = this.entryRoutingService.registerRouting(
      this.routeChange,
      this.route$
    );
    const zoneSubscription = this.entryZoneService.registerZone(
      this.microtaskEmpty$$
    );
    this.subscription = routingSubscription.add(zoneSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void {
    this.route$.next(this.route);
    this.microtaskEmpty$$.next(this.microtaskEmpty$);
  }
}
