import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShowListComponent } from './shows-list.component';
import { ShowService } from '../show.service';
import { Show } from '../show';

describe('ShowListComponent', () => {
  let component: ShowListComponent;
  let fixture: ComponentFixture<ShowListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ ShowService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería pedir y almacenar la lista de shows', () => {
    const mockShows: Show[] = [
      new Show(1, 'Demo Serie', 'CanalXYZ', 3, 'Sinopsis demo', 'http://demo.com', 'http://demo.com/img.jpg')
    ];
    const req = httpMock.expectOne('http://localhost:3000/api/shows.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockShows);
    expect(component.series).toEqual(mockShows);
  });

  it('debería marcar un show como destacado al hacer selectShow', () => {
    const show = new Show(2, 'Prueba', 'CanalPrueba', 1, 'Sinopsis', 'http://prueba.com', 'http://prueba.com/img.jpg');
    component.selectSerie(show);
    expect(component.selectedSerie).toBe(show);
  });
});
