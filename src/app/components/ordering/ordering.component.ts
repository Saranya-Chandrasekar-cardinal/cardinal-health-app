import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Import shared interfaces and components
import { SidebarLayoutComponent } from '../../shared/components/sidebar-layout/sidebar-layout.component';
import { NavItem } from '../../shared/components/sidebar-nav/sidebar-nav.component';
import { MOCK_PATIENTS, Patient } from '../../data/patients.mock';
import { MOCK_PHYSICIANS, Physician } from '../../data/physicians.mock';
import { MOCK_PROCEDURES, Procedure } from '../../data/procedures.mock';
import { MOCK_ORDER_COMPONENTS, MOCK_ORDER_RECORDS, OrderComponent, OrderRecord } from '../../data/order-data.mock';
import { 
  MOCK_CLASSIFICATIONS, 
  MOCK_TRACKING_CODES, 
  TIME_HOURS, 
  TIME_MINUTES,
  MOCK_PO_NUMBERS 
} from '../../data/dropdown-options.mock';

@Component({
  selector: 'app-ordering',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    SidebarLayoutComponent
  ],
  templateUrl: './ordering.component.html',
  styleUrl: './ordering.component.scss'
})
export class OrderingComponent implements OnInit {
  //currentView: 'initial' | 'list' | 'new-edit' = 'initial';
  currentView = 'list';
  
  // Navigation items for sidebar
  navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'Orders', active: true },
    { label: 'Patients' },
    { label: 'Preferences' }
  ];
  
  // Use imported mock data
  patients: Patient[] = MOCK_PATIENTS;
  physicians: Physician[] = MOCK_PHYSICIANS;
  procedures: Procedure[] = MOCK_PROCEDURES;
  classifications: string[] = MOCK_CLASSIFICATIONS;
  trackingCodes: string[] = MOCK_TRACKING_CODES;
  timeHours: number[] = TIME_HOURS;
  timeMinutes: string[] = TIME_MINUTES;
  poNumbers: string[] = MOCK_PO_NUMBERS;
  // Form model (simple properties instead of FormGroup)
  selectedPatientName: string = '';
  selectedClassification: string = '';
  selectedTrackingCode: string = '';
  selectedReferringPhysician: string = '';
  selectedAttendingPhysician: string = '';
  selectedProcedure: string = '';

  // Load data from mock files
  components: OrderComponent[] = MOCK_ORDER_COMPONENTS;
  orderRecords: OrderRecord[] = MOCK_ORDER_RECORDS;

  selectedPatient: Patient | null = null;
  showComponents = false;

  constructor(private router: Router) {
    // No FormBuilder needed for template-driven forms
  }

  ngOnInit() {
    // Data should be immediately available since it's static
    console.log('Component initialized');
    console.log('Patients:', this.patients.length);
    console.log('Classifications:', this.classifications.length);
    console.log('Physicians:', this.physicians.length);
  }

  showNewOrderForm() {
    this.currentView = 'new-edit';
    this.showComponents = false;
  }  backToList() {
    this.currentView = 'list';
    this.showComponents = false;
  }

  onProcedureChange() {
    this.showComponents = true;
  }
  toggleComponent(component: OrderComponent) {
    // First, collapse all other components
    this.components.forEach(comp => {
      if (comp.id !== component.id) {
        comp.expanded = false;
      }
    });
    
    // Then toggle the clicked component
    component.expanded = !component.expanded;
  }

  saveOrder() {
    // Save logic here
    alert('Order saved successfully!');
    this.backToList();
  }

  cancelOrder() {
    this.backToList();
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'in progress':
        return 'status-in-progress';
      case 'not yet started':
        return 'status-not-started';
      case 'resume ordering':
        return 'status-resume';
      default:
        return '';
    }
  }
}
