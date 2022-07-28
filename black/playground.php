<?php
/**
 * Template Name: PLAYGROUND
 */


wp_head();

$db = [
  'Exotic and luxury car rental in Dubai'=>[
  'Luxury and exotic car rental in Dubai | Best price offers',
  '300+ best cars in our fleet · Supercars and exotic cars, SUVs, convertibles, etc · Best price guarantee · Full insurance without deductible · Free delivery service · Online booking',
  ''],
  
  'Convertible cars rental in Dubai'=>[
  'Rent a Convertible car in Dubai | Best offers',
  'We have collected the top models of Convertible cars in Dubai · Full insurance without deductible · Free drop and delivery service · We are in touch 24/7',
  ''],
  
  'Supercars rental in Dubai'=>[
  'Rent a Supercar in Dubai | Best price offers | Full insurance without deductible',
  'We have collected the top models of Supercars in Dubai · Full insurance without deductible · Free drop and delivery service · We are in touch 24/7',
  ''],
  
  'SUVs rental in Dubai'=>[
  'Rent SUV in Dubai | Best price offers',
  'We have collected the top models of SUVs in Dubai · Full insurance without deductible · Free drop and delivery service · We are in touch 24/7',
  ''],
  
  'Lamborghini rental in Dubai'=>[
  'Lamborghini Car Hire Dubai | Best offers',
  'The best prices and models of Lamborghini cars rental in Dubai · Urus, Aventador, Huracan, etc · Full insurance without deductible · Free drop and delivery service · We are in touch 24/7',
  'Lamborghini'],
  
  'Lamborghini Urus rental in Dubai'=>[
  'Rent Lamborghini Urus in Dubai | Best offers',
  'Fleet of the top Lamborghini Urus cars in Dubai · Guaranteed low prices · Instant Online reservation · Full insurance without deductible · Free drop and delivery service · We are in touch 24/7',
  'Lamborghini _Urus_PNG'],
  
  'Lamborghini Aventador rental in Dubai'=>[
  'Rent Lamborghini Aventador in Dubai | Best offers',
  'Fleet of the top Lamborghini Aventador cars in Dubai · Guaranteed low prices · Full insurance without deductible · Free drop and delivery service · We are in touch 24/7',
  'Lamborghini_Aventador_PNG'],
  
  'Lamborghini Huracan rental in Dubai'=>[
  'Rent Lamborghini Huracan in Dubai | Best offers',
  'Fleet of the top Lamborghini Huracan cars in Dubai · Guaranteed low prices · Free drop and delivery service · Full insurance without deductible · We are in touch 24/7',
  'Lamborghini_Huracan_PNG'],
  
  'Ferrari rental in Dubai'=>[
  'Ferrari Car Hire Dubai | Best price offers | Free drop and delivery service',
  'The best prices and models of Ferrari cars rental in Dubai · Roma, California, Portofino, etc · Free drop and delivery service · Full insurance without deductible · We are in touch 24/7',
  'Ferrari'],
  
  'Ferrari Roma rental in Dubai'=>[
  'Rent Ferrari Roma in Dubai | Best price offers | Full insurance without deductible',
  'The top Ferrari Roma options for rent in Dubai · Daily, weekly and monthly car rental offers · Full insurance without deductible · Delivered at your location · Booking 24/7',
  'Ferrari_Roma_PNG'],
  
  'Ferrari 458 rental in Dubai'=>[
  'Rent Ferrari 458 in Dubai | Best price offers | Free drop and delivery service',
  'The top Ferrari 458 options for rent in Dubai · Daily, weekly and monthly car rental offers · Full insurance without deductible · Delivered at your location · Booking 24/7',
  'Ferrari_458_PNG'],
  
  'Ferrari Portofino rental in Dubai'=>[
  'Rent Ferrari Portofino in Dubai | Best offers',
  'The top Ferrari GTC4Lusso options for rent in Dubai · Daily, weekly and monthly car rental offers · Full insurance without deductible · Delivered at your location · 24/7',
  'Ferrari_Portofino_PNG'],
  
  'Ferrari GTC4Lusso rental in Dubai'=>[
  'Rent Ferrari GTC4Lusso in Dubai | Best offers',
  'The top Ferrari Roma options for rent in Dubai · Daily, weekly and monthly car rental offers · Full insurance without deductible · Delivered at your location · Booking 24/7',
  'Ferrari_GTC4Lusso_PNG'],
  
  'Ferrari F12 rental in Dubai'=>[
  'Rent Ferrari F12 in Dubai | Best price offers | Full insurance without deductible',
  'The top Ferrari F12 options for rent in Dubai · Daily, weekly and monthly car rental offers · Full insurance without deductible · Delivered at your location · Booking 24/7',
  'Ferrari_F12_PNG'],
  
  'Rolls-Royce rental in Dubai'=>[
  'Rolls-Royce Car Hire Dubai | Best price offers | Full insurance without deductible',
  'The top Rolls-Royce models in Dubai · Cullinan, Wraith, Dawn, Ghost, etc · Guaranteed low prices · Full insurance without deductible · Registration in 3 minutes · 24/7',
  'Rolls_Royce'],
  
  'Rolls-Royce Cullinan rental in Dubai'=>[
  'Rent Rolls-Royce Cullinan in Dubai | Best offers',
  'Daily, weekly and monthly Rolls-Royce Cullinan car rental offers in Dubai · Guaranteed low prices · Full insurance without deductible · Registration in 3 minutes · 24/7',
  'Rolls-Royce_Cullinan_PNG'],
  
  'Rolls-Royce Wraith rental in Dubai'=>[
  'Rent Rolls-Royce Wraith in Dubai | Best offers',
  'The widest range of Rolls-Royce Wraith cars for rent in Dubai · Instant Online reservation · Full insurance without deductible · Registration in 3 minutes · Free delivery service · Booking 24/7',
  'Rolls-Royce_Wraith_PNG'],
  
  'Rolls-Royce Dawn rental in Dubai'=>[
  'Rent Rolls-Royce Dawn in Dubai | Best offers',
  'Daily, weekly and monthly Rolls-Royce Dawn car rental offers in Dubai · Full insurance without deductible · Delivered at your location · Registration in 3 minutes',
  'Rolls-Royce_Dawn_PNG'],
  
  'Rolls-Royce Ghost rental in Dubai'=>[
  'Rent Rolls-Royce Ghost in Dubai | Best offers',
  'The most luxurious Rolls-Royce Ghost fleet for rent in Dubai · Instant Online reservation · Full insurance without deductible · Registration in 3 minutes · Booking 24/7',
  'Rolls-Royce_Ghost_PNG'],
  
  'Rolls-Royce Chauffeur hire in Dubai'=>[
  'Rolls-Royce Chauffeur Hire in Dubai| Best offers',
  'The most luxurious Rolls-Royce Chauffeur fleet for rent in Dubai · Registration in 3 minutes · Booking 24/7 · Full insurance without deductible· We are in touch 24/7',
  'Rolls-Royce_Chauffeur_PNG'],
  
  'Bentley rental in Dubai'=>[
  'Bentley Car Hire Dubai | Best price offers | Full insurance without deductible',
  'The best prices and models of Bentley cars rental in Dubai · Bentayga, Continental GT, Flying Spur · Guaranteed low prices · Full insurance without deductible · Free delivery service',
  'Bentley'],
  
  'Bentley Bentayga rental in Dubai'=>[
  'Rent Bentley Bentayga in Dubai | Best offers',
  'Daily, weekly and monthly Bentley Bentayga car rental offers in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · Booking 24/7',
  'Bentley_Bentayga_PNG'],
  
  'Bentley Continental GT rental in Dubai'=>[
  'Rent Bentley Continental GT in Dubai | Best offers',
  'Daily, weekly and monthly Bentley Continental GT car rental offers in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · Booking 24/7',
  'Bentley_Continental_GT_PNG'],
  
  'Bentley Flying Spur rental in Dubai'=>[
  'Rent Bentley Flying Spur in Dubai | Best offers',
  'Daily, weekly and monthly Bentley Flying Spur car rental offers in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · Booking 24/7',
  'Bentley_Flying_Spur_PNG'],
  
  'Porsche rental in Dubai'=>[
  'Porshe Car Hire Dubai | Best price offers | Free drop and delivery service',
  'The best prices and models of Porsche cars rental in Dubai · Cayenne, Panamera, Macan, etc · Guaranteed low prices · Full insurance without deductible · Free delivery service · Booking 24/7',
  'Porsche'],
  
  'Porsche Cayenne rental in Dubai'=>[
  'Rent Porshe Cayenne in Dubai | Best offers',
  'The most luxurious Porsche Cayenne fleet for rent in Dubai · Instant Online reservation · Full insurance without deductible · Registration in 3 minutes · Delivered at your location · 24/7',
  'Porshe_Cayenne_PNG'],
  
  'Porsche 911 rental in Dubai'=>[
  'Rent Porshe 911 in Dubai | Best price offers',
  'The most luxurious Porsche 911 fleet for rent in Dubai · Instant Online reservation · Full insurance without deductible · Daily, weekly and monthly car rental offers · Delivered at your location · 24/7',
  'Porshe_911_PNG'],
  
  'Porsche Panamera rental in Dubai'=>[
  'Rent Porshe Panamera in Dubai | Best offers',
  'The most luxurious Porsche Panamera fleet for rent in Dubai · Instant Online reservation · Full insurance without deductible · Registration in 3 minutes · Delivered at your location · 24/7',
  'Porshe_Panamera_PNG'],
  
  'Porsche Macan rental in Dubai'=>[
  'Rent Porshe Macan in Dubai | Best offers',
  'The most luxurious Porsche Macan fleet for rent in Dubai · Instant Online reservation · Full insurance without deductible · Registration in 3 minutes · Delivered at your location · 24/7',
  'Porshe_Macan_PNG'],
  
  'Porsche Taycan rental in Dubai'=>[
  'Rent Porshe Taycan in Dubai | Best offers',
  'The most luxurious Porsche Taycan fleet for rent in Dubai · Instant Online reservation · Full insurance without deductible · Daily, weekly and monthly car rental offers · Delivered at your location · 24/7',
  'Porshe_Taycan_PNG'],
  
  'Land Rover rental in Dubai'=>[
  'Land Rover Car Hire Dubai | Best price offers',
  'The most luxurious Land Rover fleet for rent in Dubai · Daily, weekly and monthly car rental offers · Instant Online reservation · Full insurance without deductible · Registration in 3 minutes',
  ''],
  
  'Range Rover rental in Dubai'=>[
  'Rent Range Rover in Dubai | Best price offers',
  'The most luxurious Range Rover fleet for rent in Dubai · Sport, Velar, Evoque, etc · Guaranteed low prices · Full insurance without deductible · Free delivery service · Booking 24/7',
  'Range_Rover'],
  
  'Range Rover Sport hire in Dubai'=>[
  'Rent Range Rover Sport in Dubai | Best offers',
  'The most top-end and premium Range Rover Sport options for rent in Dubai · Daily, weekly and monthly car rental offers · Instant Online reservation · Full insurance without deductible · Delivered at your location',
  'Range_Rover_Sport_PNG'],
  
  'Range Rover Velar hire in Dubai'=>[
  'Rent Range Rover Velar in Dubai | Best offers',
  'The most luxurious Range Rover Velar fleet for rent in Dubai · Zero commission or booking fees · Delivered at your location · We are in touch 24/7 · Instant Online reservation',
  'Range_Rover_Velar_PNG'],
  
  'Range Rover Evoque hire in Dubai'=>[
  'Rent Range Rover Evoque in Dubai | Best offers',
  'The most luxurious Range Rover Evoque fleet for rent in Dubai · Zero commission or booking fees · Delivered at your location · We are in touch 24/7 · Instant Online reservation',
  'Range_Rover_Evoque_PNG'],
  
  'Range Rover convertible rental in Dubai'=>[
  'Rent Range Rover Convertible in Dubai | Best offers',
  'The most luxurious Range Rover convertible fleet for rent in Dubai · Zero commission or booking fees · Delivered at your location · We are in touch 24/7 · Instant Online reservation',
  'Range_Rover_convertible'],
  
  'Bugatti rental in Dubai'=>[
  'Bugatti Car Hire Dubai | Best price offers | Full insurance without deductible',
  'The best prices and models of Bugatti cars rental in Dubai · Chiron, Veyron of different colors · Guaranteed low prices · Full insurance without deductible · Free delivery service · 24/7',
  'Bugatti'],
  
  'Bugatti Chiron rental in Dubai'=>[
  'Rent Bugatti Chiron in Dubai | Best price offers | Free drop and delivery service',
  'The most luxurious Bugatti Chiron fleet for rent in Dubai· Free delivery and full insurance are already included · Daily, weekly and monthly car rental offers · Booking 24/7 · Registration in 3 minutes',
  'Bugatti_Chiron_PNG'],
  
  'Bugatti Veyron rental in Dubai'=>[
  'Rent Bugatti Veyron in Dubai | Best price offers | Full insurance without deductible',
  'The most luxurious Bugatti Veyron fleet for rent in Dubai · Free delivery and full insurance are already included · Daily, weekly and monthly car rental offers · Booking 24/7 · Registration in 3 minutes',
  'Bugatti_Veyron_PNG'],
  
  'Mercedes-Benz rental in Dubai'=>[
  'Mercedes-Benz Car Hire Dubai | Best offers',
  'The top Mercedes-Benz models in Dubai · Sprinter, G-Class, S-Class, GLS-Class, etc · Guaranteed low prices · Full insurance without deductible · Free delivery service · Booking 24/7',
  'Mercedes'],
  
  'Mercedes-Benz Sprinter rental in Dubai'=>[
  'Rent Mercedes-Benz Sprinter in Dubai | Best offers',
  'The most top-end and premium Mercedes-Benz Sprinter options for rent in Dubai · Free delivery and full insurance are already included · Guaranteed low prices · Booking 24/7 · Registration in 3 minutes',
  'Mercedes-Benz_Sprinter_PNG'],
  
  'Mercedes-Benz G-Class rental in Dubai'=>[
  'Rent Mercedes-Benz G-Class in Dubai | Best offers',
  'The most top-end and premium Mercedes-Benz G-Class options for rent in Dubai · G Wagon, G64, etc · Instant Online reservation · Full insurance without deductible · Delivered at your location · 24/7 · Registration in 3 minutes',
  'Mercedes-Benz_G-Class_PNG'],
  
  'Mercedes-Benz Van rental in Dubai'=>[
  'Rent Mercedes-Benz Van in Dubai | Best offers',
  'The most top-end and premium Mercedes-Benz Van options for rent in Dubai · Free delivery and full insurance are already included · Guaranteed low prices · Booking 24/7 · Registration in 3 minutes',
  'Mercedes-Benz_VAN_PNG'],
  
  'Long term VAN rental in Dubai'=>[
  'Long term VAN rental in Dubai | Best offers',
  'The most top-end and premium Long term VAN options for rent in Dubai · Instant Online reservation · Full insurance without deductible · Registration in 3 minutes · 24/7',
  ''],
  
  'Mercedes-Benz S-Class rental in Dubai'=>[
  'Rent Mercedes-Benz S-Class in Dubai | Best offers',
  'The most top-end and premium Mercedes-Benz S-Class options for rent in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · 24/7 · Registration in 3 minutes',
  'Mercedes-Benz_S-Class_PNG'],
  
  'Mercedes-Maybach rental in Dubai'=>[
  'Rent Mercedes-Maybach in Dubai | Best offers',
  'The most top-end and premium Mercedes-Benz Maybach options for rent in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · 24/7 · Registration in 3 minutes',
  'Mercedes-Maybach_PNG'],
  
  'Mercedes-Benz G63 AMG rental in Dubai'=>[
  'Rent Mercedes-Benz G63 AMG in Dubai | Best offers',
  'The most top-end and premium Mercedes-Benz G63 AMG options for rent in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · 24/7 · Registration in 3 minutes',
  'Mercedes-Benz_G63_AMG_PNG'],
  
  'Mercedes-Benz AMG GT63 rental in Dubai'=>[
  'Rent Mercedes-AMG GT63 in Dubai | Best offers',
  'The most top-end and premium Mercedes-Benz AMG GT63 options for rent in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · 24/7 · Registration in 3 minutes',
  'Mercedes-Benz_AMG_GT63_PNG'],
  
  'Mercedes-Benz GLS-Class AMG GLS 63 rental in Dubai'=>[
  'Rent Mercedes-Benz AMG GLS 63 in Dubai | Best offers',
  'The most top-end and premium Mercedes-Benz GLS-Class AMG GLS 63 options for rent in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · 24/7',
  'Mercedes-Benz_GLS-Class_AMG_GLS_63'],
  
  'Mercedes-Benz AMG rental in Dubai'=>[
  'Rent Mercedes-AMG in Dubai | Best price offers | Full insurance without deductible',
  'The most top-end and premium Mercedes-Benz AMG options for rent in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · 24/7 · Registration in 3 minutes',
  'Mercedes-Benz_AMG'],
  
  'Mercedes-Benz convertible rental in Dubai'=>[
  'Rent Mercedes Convertible in Dubai | Best offers',
  'The top Mercedes-Benz convertible cars options for rent in Dubai · Zero commission or booking fees · Delivered at your location · We are in touch 24/7',
  'Mercedes-Benz_convertible'],
  
  'Audi rental in Dubai'=>[
  'Audi Car Hire Dubai | Best price offers | Free drop and delivery service',
  'The best Audi models in Dubai · R8, Q8, A6, RS7, etc · Free delivery and full insurance are already included · Guaranteed low prices · Booking 24/7 · Registration in 3 minutes',
  'Audi'],
  
  'Audi R8 rental in Dubai'=>[
  'Rent Audi R8 in Dubai | Best price offers | Full insurance without deductible',
  'Daily, weekly and monthly Audi R8 car rental offers in Dubaii · Free delivery and full insurance are already included · Booking 24/7 · Delivered at your location',
  'Audi_R8_PNG'],
  
  'Audi Q8 rental in Dubai'=>[
  'Rent Audi Q8 in Dubai | Best price offers | Free drop and delivery service',
  'Daily, weekly and monthly Audi Q8 car rental offers in Dubai · Instant Online reservation · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'Audi_Q8_PNG'],
  
  'Audi A6 rental in Dubai'=>[
  'Rent Audi A6 in Dubai | Best price offers | Full insurance without deductible',
  'Daily, weekly and monthly Audi A6 car rental offers in Dubai · Free delivery and full insurance are already included · Booking 24/7 · Delivered at your location',
  'Audi_A6_PNG'],
  
  'Audi A3 rental in Dubai'=>[
  'Rent Audi A3 in Dubai | Best price offers | Free drop and delivery service',
  'Daily, weekly and monthly Audi A3 car rental offers in Dubai · Instant Online reservation · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'Audi_A3_PNG'],
  
  'Audi RS7 rental in Dubai'=>[
  'Rent Audi RS7 in Dubai | Best price offers | Full insurance without deductible',
  'Daily, weekly and monthly Audi RS7 car rental offers in Dubai · Free delivery and full insurance are already included · Booking 24/7 · Delivered at your location',
  'Audi_RS7_PNG'],
  
  'Audi Q3 rental in Dubai'=>[
  'Rent Audi Q3 in Dubai | Best price offers | Free drop and delivery service',
  'Daily, weekly and monthly Audi Q3 car rental offers in Dubai · Instant Online reservation · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'Audi_Q3_PNG'],
  
  'Audi Q7 rental in Dubai'=>[
  'Rent Audi Q7 in Dubai | Best price offers | Full insurance without deductible',
  'Daily, weekly and monthly Audi Q7 car rental offers in Dubai · Free delivery and full insurance are already included · Booking 24/7 · Delivered at your location',
  'Audi_Q7_PNG'],
  
  'Tesla rental in Dubai'=>[
  'Tesla Car Hire Dubai | Best price offers | Free drop and delivery service',
  'The best prices and models of Tesla car rental in Dubai · Online booking · Free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Tesla'],
  
  'Tesla Model X rental in Dubai'=>[
  'Rent Tesla Model X in Dubai | Best price offers | Full insurance without deductible',
  'Daily, weekly and monthly Tesla Model X car rental offers in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · Booking 24/7',
  'Tesla_Model_X_PNG'],
  
  'Maserati rental in Dubai'=>[
  'Maserati Car Hire Dubai | Best price offers | Free drop and delivery service',
  'The best prices and models of Maserat car rental in Dubai · Daily, weekly and monthly car rental offers · Instant Online reservation · Full insurance without deductible · Registration in 3 minutes',
  'Maserati'],
  
  'Chevrolet Camaro rental in Dubai'=>[
  'Rent Chevrolet Camaro in Dubai | Best offers |LCD Hire',
  'The best daily, weekly and monthly rental rates on the Chevy Camaro in Dubai · Zero commission or booking fees · Delivered at your location · We are in touch 24/7',
  'Chevrolet_Camaro_PNG'],
  
  'Chevrolet Corvette rental in Dubai'=>[
  'Rent Chevrolet Corvette in Dubai | Best offers',
  'The best daily, weekly and monthly rental rates on the Chevrolet Corvette in Dubai · Zero commission or booking fees · Delivered at your location · We are in touch 24/7',
  'Chevrolet_Corvette_PNG'],
  
  'McLaren rental in Dubai'=>[
  'McLaren Car Hire Dubai | Best price offers | Full insurance without deductible',
  'The best prices and models of McLaren car rental in Dubai · 720S, 570S, 650S, etc · Free delivery and full insurance are already included · Guaranteed low prices · Booking 24/7 · Registration in 3 minutes',
  'McLaren'],
  
  'McLaren 720S rental in Dubai'=>[
  'Rent McLaren 720S in Dubai | Best price offers | Free drop and delivery service',
  'The top McLaren 720S options for rent in Dubai · Price include full insurance and free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'McLaren_720S_PNG'],
  
  'McLaren 570S rental in Dubai'=>[
  'Rent McLaren 570S in Dubai | Best price offers | Full insurance without deductible',
  'The top McLaren 570S options for rent in Dubai · Price include full insurance and free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'McLaren_570S_PNG'],
  
  'McLaren 650S Spider rental in Dubai'=>[
  'Rent McLaren 650S Spider in Dubai | Best offers',
  'The top McLaren 650S Spider options for rent in Dubai · Price include full insurance and free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'McLaren_650S_PNG'],
  
  'Cadillac rental in Dubai'=>[
  'Rent Cadillac in Dubai | Best offers | Full insurance without deductible',
  'The best prices and models of Cadillac car rental in Dubai · Cadillac, СЕ6, etc · Free delivery and full insurance are already included · Guaranteed low prices · Booking 24/7 · Registration in 3 minutes',
  'Cadillac'],
  
  'Cadillac Escalade rental in Dubai'=>[
  'Rent Cadillac Escalade in Dubai | Best offers',
  'Daily, weekly and monthly Cadillac Escalade car rental offers in Dubai · Free delivery and full insurance are already included · Booking 24/7 · Delivered at your location',
  'Cadillac_Escalade_PNG'],
  
  'Ford Mustang convertible rental in Dubai'=>[
  'Rent Mustang Convertible in Dubai | Best offers',
  'Fleet of the best premium Ford Mustang convertible cars in Dubai · Instant Online reservation · Full insurance without deductible · Delivered at your location · Booking 24/7',
  'Ford_Mustang_PNG'],
  
  'BMW i8 rental in Dubai'=>[
  'Rent BMW i8 Roadster in Dubai | Best offers',
  'Fleet of the best premium BMW i8cars in Dubai · Registration in 3 minutes · Guaranteed low prices · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'BMW_i8_PNG'],
  
  'BMW X7 rental in Dubai'=>[
  'Rent BMW X7 in Dubai | Best offers | Full insurance without deductible',
  'Fleet of the best premium BMW X7 cars in Dubai · Registration in 3 minutes · Guaranteed low prices · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'BMW_X7_PNG'],
  
  'BMW 8 series rental in Dubai'=>[
  'Rent BMW 8 series in Dubai | Best offers',
  'Fleet of the best premium BMW 8 series cars in Dubai · Registration in 3 minutes · Guaranteed low prices · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'BMW_8_series_PNG'],
  
  'BMW 4 series convertible rental in Dubai'=>[
  'Rent BMW 4 series Convertible in Dubai | Best offers',
  'Fleet of the best premium BMW 4 series convertible in Dubai · Registration in 3 minutes · Guaranteed low prices · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'BMW_4_series_convertible_PNG'],
  
  'Aston Martin rental in Dubai'=>[
  'Rent Aston Martin in Dubai | Best price offers',
  'The best prices and models of Aston Martin luxury cars rental in Dubai · Vantage, D11, etc · Online booking · Free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Aston_Martin'],
  
  'Jaguar rental in Dubai'=>[
  'Rent Jaguar in Dubai | Best offers | Full insurance without deductible',
  'We offers the best collection of Jaguar Models for rent in Dubai ranging from the F Type to the XF · Online booking · Free delivery service · Daily, weekly and monthly car rental offers',
  'Jaguar'],
  
  'Alfa Romeo rental in Dubai'=>[
  'Rent Alfa Romeo in Dubai | Best price offers',
  'The best prices and models of Alfa Romeo luxury cars rental in Dubai · Stelvio, Giulietta · Online booking · Free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Alfa_Romeo'],
  
  'Nissan GT-R rental in Dubai'=>[
  'Rent Nissan GT-R Car Hire Dubai | Best price offers | Full insurance without deductible',
  'Daily, weekly and monthly Nissan GT-R car rental offers in Dubai · Instant Online reservation · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'Nissan_GT-R_PNG'],
  
  'Pagani rental in Dubai'=>[
  'Rent Pagani in Dubai | Best offers | Full insurance without deductible',
  'The best prices and models of Pagani Exotic cars rental in Dubai · Huayra, Zonda · Online booking · Free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Pagani'],
  
  'Koenigsegg rental in Dubai'=>[
  'Rent Koenigsegg in Dubai | Best price offers',
  'The best prices and models of Koenigsegg Exotic cars rental in Dubai · Online booking · Free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Koenigsegg'],
  
  'Lotus rental in Dubai'=>[
  'Rent Lotus in Dubai | Best offers | Full insurance without deductible',
  'The best prices and models of Lotus Exotic cars rental in Dubai · Online booking · Free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Lotus'],
  
  'Nissan rental in Dubai'=>[
  'Rent Nissan in Dubai | Best offers | Full insurance without deductible',
  'The best prices and models of Nissan car rental in Dubai · GT-R, Patrol, etc · Free delivery and full insurance are already included · Guaranteed low prices · Booking 24/7 · Registration in 3 minutes',
  'Nissan'],
  
  'Nissan Patrol rental in Dubai'=>[
  'Rent Nissan Patrol in Dubai | Best offers',
  'Daily, weekly and monthly Nissan Patrol car rental offers in Dubai · Instant Online reservation · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'Nissan_Patrol_PNG'],
  
  'Lexus rental in Dubai'=>[
  'Lexus Car Hire Dubai | Best offers | Full insurance without deductible',
  'The best prices and models of Lexus car rental in Dubai · Lexus 570, Lexus ES350, NX Series, etc · Price include full insurance and free delivery service · Daily, weekly and monthly car rental offers',
  'Lexus'],
  
  'Lexus 570 rental in Dubai'=>[
  'Lexus 570 Car Hire Dubai | Best price offers | Free drop and delivery service',
  'The best daily, weekly and monthly rental rates on the Lexus 570 in Dubai · Zero commission or booking fees · Delivered at your location · We are in touch 24/7',
  'Lexus_570_PNG'],
  
  'Jeep rental in Dubai'=>[
  'Rent Jeep in Dubai | Best offers | Full insurance without deductible',
  'The best prices and models of Jeep luxury cars rental in Dubai · Online booking · Free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Jeep'],
  
  'Jeep Wrangler rental in Dubai'=>[
  'Rent Jeep Wrangler in Dubai | Best price offers',
  'The best daily, weekly and monthly rental rates on the Jeep Wrangler in Dubai · Zero commission or booking fees · Delivered at your location · We are in touch 24/7',
  'Jeep_Wrangler_PNG'],
  
  'GMS rental in Dubai'=>[
  'Rent GMS in Dubai | Best price offers',
  'The best prices and models of GMS luxury cars rental in Dubai · Online booking · Free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'GMS'],
  
  'Mini Cooper rental in Dubai'=>[
  'Rent Mini Cooper in Dubai | Best price offers',
  'The best prices and models of Mini Cooper luxury cars rental in Dubai · Online booking · Free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Mini_Cooper_PNG'],
  
  'Self drive luxury car rental in Dubai'=>[
  'Self Drive Luxury Car Hire Dubai | Full insurance without deductible',
  'The top Exotic and Luxury cars for self-rental in Dubai · Guaranteed low prices · Free delivery service · We are in touch 24/7 · Daily, weekly and monthly car rental offers',
  ''],
  
  'Chauffeur car hire Dubai'=>[
  'Car With Driver Hire Dubai | Full insurance without deductible',
  'Chauffeur services are the best luxury and exotic car rentals in Dubai for business, airport transfers and special occasions · Guaranteed low prices · Booking 24/7',
  ''],
  
  'Exotic and luxury car rental in Dubai Airport'=>[
  'Luxury and exotic car rentals in Dubai Airport',
  'We offers the best prices and models of Exotic and Luxury cars for rent in Dubai Airport · Full insurance without deductible · Online booking 24/7 · Free delivery service',
  ''],
  
  'Exotic and luxury car rental in Bur Dubai'=>[
  'Luxury and exotic car rentals in Bur Dubai',
  'We offers the best prices and models of Exotic and Luxury cars for rent in Bur Dubai · Full insurance without deductible · Online booking 24/7 · Free delivery service',
  ''],
  
  'Exotic and luxury car rental in Al Barsha'=>[
  'Luxury and exotic car rentals in Al Barsha',
  'We offers the best prices and models of Exotic and Luxury cars for rent in Al Barsha · Full insurance without deductible · Online booking 24/7 · Free delivery service',
  ''],
  
  'Exotic and luxury car rental in Deira'=>[
  'Luxury and exotic car rentals in Deira',
  'We offers the best prices and models of Exotic and Luxury cars for rent in Deira · Full insurance without deductible · Online booking 24/7 · Free delivery service',
  ''],
  
  'Exotic and luxury car rental in Dubai Marina'=>[
  'Luxury and exotic car rentals in Dubai Marina',
  'We offers the best prices and models of Exotic and Luxury cars for rent in Dubai Marina · Full insurance without deductible · Online booking 24/7 · Free delivery service',
  ''],
  
  'Exotic and luxury car rental in Palm Jumeirah'=>[
  'Luxury and exotic car rentals in Palm Jumeirah',
  'We offers the best prices and models of Exotic and Luxury cars for rent in Palm Jumeirah · Full insurance without deductible · Online booking 24/7 · Free delivery service',
  ''],
  
  'Maserati Levante rental in Dubai'=>[
  'Rent Maserati Levante in Dubai | Best price offers | Full insurance without deductible',
  'Daily, weekly and monthly Maserati Levante car rental offers in Dubai · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'Maserati_Levante_PNG'],
  
  'BMW rental in Dubai'=>[
  'Rent BMW in Dubai | Best price offers',
  'The best prices and models of BMW luxury cars rental in Dubai · X7, i8, 4 series, etc · Daily, weekly and monthly car rental offers · Booking 24/7',
  'BMW'],
  
  'Aston Martin Vantage rental in Dubai'=>[
  'Rent Aston Martin Vantage in Dubai | Best price offers',
  'The top Aston Martin Vantage options for rent in Dubai · Price include full insurance and free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Aston_Martin_Vantage_PNG'],
  
  'Jaguar XF rental in Dubai'=>[
  'Rent Jaguar XF in Dubai | Best price offers',
  'Daily, weekly and monthly Jaguar XF car rental offers in Dubai · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'Jaguar_XF_PNG'],
  
  'Alfa Romeo Stelvio rental in Dubai'=>[
  'Rent Alfa Romeo Stelvio in Dubai | Best price offers | Free drop and delivery service',
  'The top Alfa Romeo Stelvio options for rent in Dubai · Price include full insurance and free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Alfa_Romeo_Stelvio_PNG'],
  
  'Pagani Zonda rental in Dubai'=>[
  'Pagani Zonda Car Hire Dubai | Best price offers | Full insurance without deductible',
  'The top Pagani Zonda options for rent in Dubai · Price include full insurance and free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Pagani_Zonda_PNG'],
  
  'Koenigsegg Agera rental in Dubai'=>[
  'Rent Koenigsegg Agera in Dubai | Best offers',
  'The top Koenigsegg Agera options for rent in Dubai · Price include full insurance and free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Koenigsegg_Agera_PNG'],
  
  'Lotus Evora rental in Dubai'=>[
  'Rent Lotus Evora in Dubai | Best price offers',
  'The top Lotus Evora options for rent in Dubai · Price include full insurance and free delivery service · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Lotus_Evora_PNG'],
  
  'GMS Yukon rental in Dubai'=>[
  'Rent GMS Yukon in Dubai | Best price offers',
  'Daily, weekly and monthly GMS Yukon car rental offers in Dubai · Full insurance without deductible · Booking 24/7 · Delivered at your location',
  'GMS_Yukon_PNG'],
  
  'Exotic cars rental in Dubai'=>[
  'Exotic cars Hire Dubai | Best price offers | Full insurance without deductible',
  'We have collected the top models of Exotic cars in Dubai · Best rates guaranteed · Full insurance without deductible · Free delivery service · We are in touch 24/7',
  ''],
  
  'Muscle cars rental in Dubai'=>[
  'Muscle cars Hire Dubai | Best price offers | Free drop and delivery service',
  'We have collected the top models of Muscle cars in Dubai · Best rates guaranteed · Full insurance without deductible · Free delivery service · We are in touch 24/7',
  ''],
  
  'Luxury cars rental in Dubai'=>[
  'Luxury cars Hire Dubai| Best price offers | Full insurance without deductible',
  'We have collected the top models of Luxury cars in Dubai · Best rates guaranteed · Full insurance without deductible · Free delivery service · We are in touch 24/7',
  ''],
  
  'Ford rental in Dubai'=>[
  'Ford Car Hire Dubai | Best offers | Full insurance without deductible',
  'The best prices and models of Ford luxury cars rental in Dubai · Best rates guaranteed · Online booking · Daily, weekly and monthly car rental offers · Booking 24/7',
  'Ford'],
  
  'Chevrolet'=>[
  'Rent Jeep Wrangler in Dubai | Best price offers',
  'The best prices and models of Chevrolet luxury cars rental in Dubai · Best rates guaranteed · Online booking · Daily, weekly and monthly car rental offers · We are in touch 24/7',
  'Chevrolet_Camaro_PNG'],
  
  'Ford Mustang convertible rental in Dubai'=>[
  'Rent Mustang Convertible in Dubai | Best price offers',
  'The largest and best selection of Mustangs convertible cars available for rental in Dubai · Full insurance without deductible · Delivered at your location · Booking 24/7',
  'Ford_Mustang_PNG']
  ];



$args = [
  'post_type' => 'page',
  'numberposts' => -1
];


echo '<pre>';

foreach (get_posts($args) as $key => $post) {
  // if ($key > 5) break;
  $new_title = '';
  $new_desk = '';

  // print_r(get_post_meta($post->ID));
  if (array_key_exists($post->post_title, $db)) {
    $color = 'yellow';
    // echo $db[$post->post_title][0].' ----- ';
    // echo update_post_meta($post->ID, '_genesis_title', $db[$post->post_title][0]);
    // echo update_post_meta($post->ID, '_genesis_description', $db[$post->post_title][1]);
    if($db[$post->post_title][2] !== '') {
      $src = get_page_by_title( pathinfo( 'http://black.cq77457.tmweb.ru/wp-content/uploads/2022/07/'.$db[$post->post_title][2] )['filename'], "OBJECT", 'attachment' );
      set_post_thumbnail( $post, $src->ID );
      $color = 'orange';
    }
    echo '<p style="background:'.$color.'">';
  } else {
    echo '<p>';
    $src = [];
  }
  echo get_the_post_thumbnail($post->ID,'thumbnail');
  // echo get_post_meta($post->ID)['_genesis_title'][0];
  // echo '<br>';
  // echo get_post_meta($post->ID)['_genesis_description'][0];
  echo '<br>';
  echo $post->post_title;
  echo '</p>';
  echo '<hr>';
}

echo '</pre>';


// _genesis_title
// _genesis_description
