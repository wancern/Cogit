package com.whitemind.cogit.code.controller;import org.springframework.http.HttpStatus;import org.springframework.http.ResponseEntity;import org.springframework.web.bind.annotation.PostMapping;import org.springframework.web.bind.annotation.RequestBody;import org.springframework.web.bind.annotation.RequestMapping;import org.springframework.web.bind.annotation.RestController;import com.whitemind.cogit.code.dto.request.CodeRequest;@RestController@RequestMapping("/code")public class codeController {	@PostMapping	public ResponseEntity<Void> testCode(@RequestBody CodeRequest code){		System.out.println(code.getCodeContent());		System.out.println(code.getCodeResult());		System.out.println(code.getCodeLanguage());		System.out.println(code.getCodeRunningTime());		System.out.println(code.getAlgorithmQuestId());		System.out.println(code.getAlgorithmQuestId());		return ResponseEntity.status(HttpStatus.OK).build();	}}