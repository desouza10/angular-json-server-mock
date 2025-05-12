import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          paramMap: of({
            get: (key: string) => 'pikachu'
          }),
          snapshot: {
            paramMap: {
              get: (key: string) => 'pikachu'
            }
          }
        }
      }, provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
