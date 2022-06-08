#include <iostream>

using namespace std;

//------------DEFINE_A_NODE-------------//
struct Node {
	int data;
	struct Node *pNext;
};

//------------DEFINE_A_EMPTY_LIST-------------//
struct List {
	Node *pHead;
	Node *pTail;
};

void init(List &l) {
	l.pHead = l.pTail = NULL;
};

//------------CREATE_A_NEW_NODE-------------//
Node* createNode() {
	printf("Nhap gia tri: ");
	int data;
	scanf("%d", &data);

	// Append data to new node
	Node *p = new Node;
	p->data = data;
	p->pNext = NULL;
	return p;
}

//------------CHECK_THE_LIST_IS_EMPTY-------------//
void checkListIsEmpty(List &l, Node *p) {
	if (l.pHead == NULL && l.pTail == NULL) {
		l.pHead = l.pTail = p;
	}
}

//------------APPEND_TO_THE_HEAD_OR_TAIL-------------//
void toHead(List &l, Node *p) {
	p->pNext = l.pHead;
	l.pHead = p;
}

void toTail(List &l, Node *p) {
	l.pTail->pNext = p;
	l.pTail = p;
}
//------------DELETE_A_NODE-------------//
void deleteNode(List &l, value) {
	for (Node *q=l.Head; q!=NULL; q=q->pNext) {
		if (q->data == value) {
			Node *t = q;
			q = t->pNext;
			delete (t, t->pNext);
		}
	}
}

//------------MAIN-------------//
int main() {
	// Make a List
	List l;
	init(l);
	
	// Get 'num' for loop
	printf("Nhap so lan can nhap: ");
	int num;
	scanf("%d", &num);
	
	// Create and append new Node for 'num' times
	int i = 0;
	while (i < num) {
		Node *p = createNode();
		checkListIsEmpty(l, p);
		toTail(l, p);
		i++;
	}
	
	// Print data in each Node of the List
	for (Node *q=l.pHead; q!=NULL; q=q->pNext)
		printf("%d ", q->data);
		
	
	getchar();
	return 0;
}
