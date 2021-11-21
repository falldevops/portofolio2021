import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`it should have a title 'header' `, () => {
    const fixture= TestBed.createComponent(HeaderComponent)
    const header= fixture.componentInstance;
  
    expect(header.title).toEqual('Oumar FALL')
  });

  it('should render title ' , () => {
    const fixture= TestBed.createComponent(HeaderComponent)
    fixture.detectChanges();
    const header= fixture.componentInstance;
    const complied= fixture.nativeElement
    expect(complied.querySelector('.title ').textContent).toContain(header.title)


  })

  it('should render menu navigation ' , () => {
    const fixture= TestBed.createComponent(HeaderComponent)
    fixture.detectChanges();
    const complied= fixture.nativeElement
    expect(complied.querySelector('.menu span ')).toBeTruthy()


  })
});
